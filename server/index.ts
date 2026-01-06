import express from 'express'
import next from 'next'

import './config'

import { imageResizerMiddleware } from './middleware/imageResizer'
import { setupGraphqlServer } from './graphqlServer/setupGraphqlServer'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { SitemapBuilder } from './sitemap'

const cwd = process.cwd()

const port = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use('/images/', imageResizerMiddleware)

  server.use(express.static(cwd + '/shared'))

  server.use('/uploads', (req, res) => {
    res.sendFile(
      cwd + '/uploads/' + decodeURI(req.url),
      (error: Error & { status?: number; statusCode?: number }) => {
        if (error) {
          console.error('server /uploads', error)
          res.status(error.status || 404).end()
        }
      }
    )
  })

  server.use('/assets', (req, res) => {
    res.sendFile(
      cwd + '/uploads/' + decodeURI(req.url),
      (error: Error & { status?: number; statusCode?: number }) => {
        if (error) {
          console.error('server /uploads', error)
          res.status(error.status || 404).end()
        }
      }
    )
  })

  // Proxy to n8n (webhook, webhook-test, mcp)
  const n8nUrl = process.env.N8N_URL || 'http://localhost:5678'
  const n8nProxy = createProxyMiddleware({
    target: n8nUrl,
    changeOrigin: true,
  })
  server.use('/webhook', n8nProxy)
  server.use('/webhook-test', n8nProxy)
  server.use('/mcp', n8nProxy)

  /**
   * PWA and other public generated files
   */
  server.use(express.static(cwd + '/.next/public'))

  server.get('/sitemap.xml', new SitemapBuilder({}).middleware)

  // Запускаем GraphQL сервер и получаем его порт
  return setupGraphqlServer().then(({ port: graphqlPort }) => {
    // console.log('setupGraphqlServer graphqlPort', graphqlPort)

    /**
     * Здесь мы дополнительно проксируем с :3000/api на :4000/api
     * Но на проде лучше это делать через кэдди
     */
    // Настраиваем прокси от /api к GraphQL серверу
    // server.use(
    //   '/api',
    //   createProxyMiddleware({
    //     target: `http://localhost:${graphqlPort}/api`,
    //     changeOrigin: true,
    //     // ws: true,
    //   })
    // )

    const proxy = createProxyMiddleware('/api', {
      target: `http://localhost:${graphqlPort}`,
      changeOrigin: true,
      ws: false, // отключаем автоматическое ws-проксирование
    })

    server.use(proxy)

    /**
     * С некстом этот номер не проходит, сюда даже не долетает событие.
     * А если сразу проксировать с вс, то тогда его hmr ломается.
     * так что пока что вс только через кэдди
     */
    // server.on('upgrade', (req, socket, head) => {
    //   console.log('on upgrade req.url', req.url)

    //   if (req.url?.startsWith('/api')) {
    //     proxy.upgrade?.(req, socket, head)
    //   }
    // })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    // Запускаем основной сервер Next.js
    server.listen(port, (err?: Error) => {
      if (err) throw err
      // eslint-disable-next-line no-console
      console.info(`> Ready on http://localhost:${port}`)
      // eslint-disable-next-line no-console
      console.info(`> API proxied to http://localhost:${graphqlPort}/api`)
    })
  })
})
