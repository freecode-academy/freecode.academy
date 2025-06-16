import chalk from 'chalk'

import URI from 'urijs'

import { Request, Response } from 'express'

const XMLWriter = require('xml-writer')

export class Sitemap {
  declare props: Record<string, any>

  constructor(props: Record<string, any>) {
    this.props = props
  }

  middleware = async (req: Request, res: Response) => {
    const protocol = req.headers['server-protocol'] || req.protocol || 'http'

    const host = req.get('host')

    const uri = new URI(`${protocol}://${host}${req.url}`)

    const urlPath = uri.path()

    let response

    switch (urlPath.toLowerCase()) {
      case '/sitemap.xml':
        response = await this.renderSitemap(req, res, uri).catch((error) => {
          console.error(chalk.red('Server error'), error)
          res.status(500)
          res.end(error.message)
        })

        break

      default:
        return res.sendStatus(404)
    }

    return response
  }

  /**
   * Рендеринк карты сайта.
   */
  async renderSitemap(req: Request, res: Response, uri: URI) {
    const { section } = uri.query(true)

    switch (section) {
      case 'main':
        return this.renderMainSitemap(req, res, uri)
      // break;

      default:
        return this.renderRootSitemap(req, res, uri)
    }
  }

  renderRootSitemap(_req: Request, res: Response, uri: URI) {
    // @ts-expect-error types
    const cleanUri: URI = uri.clone().query(null)

    if (!cleanUri) {
      throw new Error('cleanUri is empty')
    }

    /**
     * Выводим ссылки на разделы
     */
    const xml = new XMLWriter()

    xml.startDocument('1.0', 'UTF-8')

    xml
      .startElement('sitemapindex')
      .writeAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
    /**
     * Формируем ссылки на разделы
     */

    xml
      .startElement('sitemap')
      .writeElement(
        'loc',
        cleanUri
          .clone()
          .query({
            section: 'main',
          })
          .toString()
      )
      .endElement()

    xml.endDocument()

    res.charset = 'utf-8'

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    res.end(xml.toString())
  }

  /**
   * Основные страницы
   */
  async renderMainSitemap(_req: Request, res: Response, uri: URI) {
    const xml = new XMLWriter()

    xml.startDocument('1.0', 'UTF-8')

    xml
      .startElement('urlset')
      .writeAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
    this.addSitemapDocument(xml, uri, {
      url: `/`,
      priority: 1,
    })

    xml.endDocument()

    res.charset = 'utf-8'

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    res.end(xml.toString())

    return
  }

  addSitemapDocument(
    xml: any,
    uri: URI,
    doc: Record<string, string | number> & {
      url: string
    }
  ) {
    const { url, updatedAt, changefreq, priority } = doc

    if (!url) {
      return
    }

    const locUri = new URI(uri.origin()).path(url)

    xml.startElement('url').writeElement('loc', locUri.toString())

    updatedAt && xml.writeElement('lastmod', updatedAt)

    changefreq && xml.writeElement('changefreq', changefreq)

    priority && xml.writeElement('priority', priority)

    xml.endElement()
  }

  getQueryPage(uri: URI) {
    const { page: queryPage } = uri.query(true)

    return (
      (queryPage && typeof queryPage === 'string' && parseInt(queryPage)) ||
      undefined
    )
  }
}
