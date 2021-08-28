/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line no-restricted-modules
const XMLWriter = require('xml-writer')

import URI from 'urijs'
import { Request, Response } from 'express'

import Sitemap from '../'
// import {
//   // ResourceConnection,
//   // TagConnection,
//   UserConnection,
// } from 'src/modules/gql/generated';
import { initializeApollo } from '../../../src/lib/apolloClient'
import {
  SitemapUsersConnectionQuery,
  SitemapUsersConnectionDocument,
  SitemapUsersConnectionQueryVariables,
  SitemapResourcesConnectionQuery,
  SitemapResourcesConnectionQueryVariables,
  SitemapResourcesConnectionDocument,
  SitemapTagsConnectionQuery,
  SitemapTagsConnectionQueryVariables,
  SitemapTagsConnectionDocument,
  TagStatus,
  SortOrder,
} from '../../../src/modules/gql/generated'

const apolloClient = initializeApollo({
  withWs: false,
})

export default class PrismaCmsComSitemap extends Sitemap {
  /**
   * Рендеринк карты сайта.
   * Отдельные разделы с постраничностью:
   * 1. Пользователи
   * 2. Ресурсы
   * 3. Теги
   */
  async renderSitemap(req: Request, res: Response, uri: URI) {
    const { section } = uri.query(true)

    switch (section) {
      case 'main':
        return this.renderMainSitemap(req, res, uri)

      case 'users':
        return this.renderUsersSitemap(req, res, uri)

      case 'resources':
        return this.renderResourcesSitemap(req, res, uri)

      case 'tags':
        return this.renderTagsSitemap(req, res, uri)

      case undefined:
        return this.renderRootSitemap(req, res, uri)

      default:
        throw new Error('Invalid section')
    }
  }

  async renderRootSitemap(_req: Request, res: Response, uri: URI) {
    // @ts-ignore
    const cleanUri = uri.clone().query(null)

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
    const mainUri = cleanUri.clone().query({
      section: 'main',
    })

    // const usersUri = cleanUri.clone().query({
    //   section: 'users',
    // })

    // const resourcesUri = cleanUri.clone().query({
    //   section: 'resources',
    // })

    // const tagsUri = cleanUri.clone().query({
    //   section: 'tags',
    // })

    xml
      .startElement('sitemap')
      .writeElement('loc', mainUri.toString())
      .endElement()

    // xml
    //   .startElement('sitemap')
    //   .writeElement('loc', usersUri.toString())
    //   .endElement()
    await this.addUsersSitemaps(xml, uri)

    // xml
    //   .startElement('sitemap')
    //   .writeElement('loc', resourcesUri.toString())
    //   .endElement()
    await this.addResourcesSitemaps(xml, uri)

    // xml
    //   .startElement('sitemap')
    //   .writeElement('loc', tagsUri.toString())
    //   .endElement()
    await this.addTagsSitemaps(xml, uri)

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
      .writeAttribute('xmlns', 'https://www.sitemaps.org/schemas/sitemap/0.9')
    this.addSitemapDocument(xml, uri, {
      url: `/`,
      priority: 1,
    })

    this.addSitemapDocument(xml, uri, {
      url: `/comments`,
      priority: 0.6,
    })

    this.addSitemapDocument(xml, uri, {
      url: `/people`,
      priority: 0.5,
    })

    this.addSitemapDocument(xml, uri, {
      url: `/about`,
      priority: 0.5,
    })

    this.addSitemapDocument(xml, uri, {
      url: `/start/developers`,
      priority: 0.5,
    })

    xml.endDocument()

    res.charset = 'utf-8'

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    res.end(xml.toString())

    return
  }

  /**
   * Пользователи
   */

  async addUsersSitemaps(xml: any, uri: URI) {
    const limit = 1000

    const usersResult = await apolloClient.query<
      SitemapUsersConnectionQuery,
      SitemapUsersConnectionQueryVariables
    >({
      // TODO Судя по всему, fetchPolicy не спасает от кеша
      fetchPolicy: 'network-only',
      query: SitemapUsersConnectionDocument,
      variables: {
        first: limit,
        where: {
          active: {
            equals: true,
          },
          deleted: {
            equals: false,
          },
        },
        orderBy: {
          updatedAt: SortOrder.DESC,
        },
      },
    })

    const {
      aggregate: { count: total },
    } = usersResult.data.usersConnection

    const pages = Math.ceil(total / limit)

    let i = 0

    while (pages > i) {
      i++

      const query: URI.QueryDataMap = {
        section: 'users',
        page: String(i),
      }

      const pageUri = uri.clone().query(query)

      xml
        .startElement('sitemap')
        .writeElement('loc', pageUri.toString())
        .endElement()
    }
  }

  async renderUsersSitemap(_req: Request, res: Response, uri: URI) {
    const page = this.getQueryPage(uri)

    if (!page) {
      throw new Error('page is empty')
    }

    const limit = 1000

    const usersResult = await apolloClient.query<
      SitemapUsersConnectionQuery,
      SitemapUsersConnectionQueryVariables
    >({
      fetchPolicy: 'network-only',
      query: SitemapUsersConnectionDocument,
      variables: {
        first: limit,
        skip: page && page > 1 ? (page - 1) * limit : undefined,
        where: {
          active: {
            equals: true,
          },
          deleted: {
            equals: false,
          },
        },
        orderBy: {
          updatedAt: SortOrder.DESC,
        },
      },
    })

    const {
      // aggregate: { count: total },
      edges: usersEdges,
    } = usersResult.data.usersConnection

    const users = usersEdges.map((n) => n?.node)

    /**
     * Плюсуем количество статических страниц
     */
    // let total = totalUsers;

    // const pages = Math.ceil(total / limit)

    const xml = new XMLWriter()

    xml.startDocument('1.0', 'UTF-8')

    if (page) {
      xml
        .startElement('urlset')
        .writeAttribute('xmlns', 'https://www.sitemaps.org/schemas/sitemap/0.9')
      users.map((user) => {
        if (!user) {
          return null
        }

        const { username, updatedAt } = user

        this.addSitemapDocument(xml, uri, {
          url: `/profile/${username}/`,
          updatedAt: updatedAt.toISOString(),
          priority: 0.8,
        })
      })
    }
    // else {
    //   xml
    //     .startElement('sitemapindex')
    //     .writeAttribute('xmlns', 'https://www.sitemaps.org/schemas/sitemap/0.9')

    //   let i = 0

    //   while (pages > i) {
    //     i++

    //     const query: URI.QueryDataMap = {
    //       section: 'users',
    //       page: String(i),
    //     }

    //     const pageUri = uri.clone().query(query)

    //     xml
    //       .startElement('sitemap')
    //       .writeElement('loc', pageUri.toString())
    //       .endElement()
    //   }
    // }

    xml.endDocument()

    res.charset = 'utf-8'

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    res.end(xml.toString())

    return
  }

  /**
   * Ресурсы
   */

  async addResourcesSitemaps(xml: any, uri: URI) {
    const limit = 1000

    const resourcesResult = await apolloClient.query<
      SitemapResourcesConnectionQuery,
      SitemapResourcesConnectionQueryVariables
    >({
      fetchPolicy: 'network-only',
      query: SitemapResourcesConnectionDocument,
      variables: {
        first: limit,
        where: {
          published: {
            equals: true,
          },
          searchable: {
            equals: true,
          },
          deleted: {
            equals: false,
          },
        },
        orderBy: {
          updatedAt: SortOrder.DESC,
        },
      },
    })

    const {
      aggregate: { count: total },
    } = resourcesResult.data.resourcesConnection

    const pages = Math.ceil(total / limit)

    let i = 0

    while (pages > i) {
      i++

      const query: URI.QueryDataMap = {
        section: 'resources',
        page: String(i),
      }

      const pageUri = uri.clone().query(query)

      xml
        .startElement('sitemap')
        .writeElement('loc', pageUri.toString())
        .endElement()
    }
  }

  async renderResourcesSitemap(_req: Request, res: Response, uri: URI) {
    const page = this.getQueryPage(uri)

    if (!page) {
      throw new Error('page is empty')
    }

    uri = uri.query({
      section: 'resources',
    })

    const limit = 1000

    const objectsResult = await apolloClient.query<
      SitemapResourcesConnectionQuery,
      SitemapResourcesConnectionQueryVariables
    >({
      fetchPolicy: 'network-only',
      query: SitemapResourcesConnectionDocument,
      variables: {
        first: limit,
        skip: page && page > 1 ? (page - 1) * limit : undefined,
        where: {
          published: {
            equals: true,
          },
          searchable: {
            equals: true,
          },
          deleted: {
            equals: false,
          },
        },
        orderBy: {
          updatedAt: SortOrder.DESC,
        },
      },
    })

    const {
      // aggregate: { count: total },
      edges: edges,
    } = objectsResult.data.resourcesConnection

    const objects = edges.map((n) => n?.node)

    // const pages = Math.ceil(total / limit)

    const xml = new XMLWriter()

    xml.startDocument('1.0', 'UTF-8')

    if (page) {
      xml
        .startElement('urlset')
        .writeAttribute('xmlns', 'https://www.sitemaps.org/schemas/sitemap/0.9')
      objects.map((n) => {
        if (!n) {
          return null
        }

        const { uri: url, updatedAt } = n

        url &&
          this.addSitemapDocument(xml, uri, {
            url: url.replace(/\/+$/, ''),
            updatedAt: updatedAt.toISOString(),
            priority: 0.9,
          })
      })
    }
    // else {
    //   xml
    //     .startElement('sitemapindex')
    //     .writeAttribute('xmlns', 'https://www.sitemaps.org/schemas/sitemap/0.9')

    //   let i = 0

    //   while (pages > i) {
    //     i++

    //     const pageUri = uri.clone().addQuery({
    //       page: i,
    //     })

    //     xml
    //       .startElement('sitemap')
    //       .writeElement('loc', pageUri.toString())
    //       .endElement()
    //   }
    // }

    xml.endDocument()

    res.charset = 'utf-8'

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    res.end(xml.toString())

    return
  }

  /**
   * Теги
   */

  async addTagsSitemaps(xml: any, uri: URI) {
    const limit = 1000

    const tagsResult = await apolloClient.query<
      SitemapTagsConnectionQuery,
      SitemapTagsConnectionQueryVariables
    >({
      fetchPolicy: 'network-only',
      query: SitemapTagsConnectionDocument,
      variables: {
        first: limit,
        where: {
          // status_not: TagStatus.BLOCKED,
          status: {
            not: {
              equals: TagStatus.BLOCKED,
            },
          },
        },
        orderBy: {
          updatedAt: SortOrder.DESC,
        },
      },
    })

    const {
      aggregate: { count: total },
    } = tagsResult.data.tagsConnection

    const pages = Math.ceil(total / limit)

    let i = 0

    while (pages > i) {
      i++

      const query: URI.QueryDataMap = {
        section: 'tags',
        page: String(i),
      }

      const pageUri = uri.clone().query(query)

      xml
        .startElement('sitemap')
        .writeElement('loc', pageUri.toString())
        .endElement()
    }
  }

  async renderTagsSitemap(_req: Request, res: Response, uri: URI) {
    const page = this.getQueryPage(uri)

    if (!page) {
      throw new Error('page is empty')
    }

    uri = uri.query({
      section: 'tags',
    })

    const limit = 1000

    // const objectsResult: TagConnection = await api.query.tagsConnection({
    //   first: limit,
    //   skip: page && page > 1 ? (page - 1) * limit : undefined,
    //   where: {
    //     status_not: "Blocked",
    //   },
    //   orderBy: "updatedAt_DESC",
    // }, schema)
    // .catch(error => {
    //   res.status(500);
    //   res.end(error.message);
    //   ;
    // });

    const objectsResult = await apolloClient.query<
      SitemapTagsConnectionQuery,
      SitemapTagsConnectionQueryVariables
    >({
      fetchPolicy: 'network-only',
      query: SitemapTagsConnectionDocument,
      variables: {
        first: limit,
        skip: page && page > 1 ? (page - 1) * limit : undefined,
        where: {
          status: {
            not: {
              equals: TagStatus.BLOCKED,
            },
          },
        },
        orderBy: {
          updatedAt: SortOrder.DESC,
        },
      },
    })

    const {
      // aggregate: { count: total },
      edges: edges,
    } = objectsResult.data.tagsConnection

    const objects = edges.map((n) => n?.node)

    // const pages = Math.ceil(total / limit)

    const xml = new XMLWriter()

    xml.startDocument('1.0', 'UTF-8')

    if (page) {
      xml
        .startElement('urlset')
        .writeAttribute('xmlns', 'https://www.sitemaps.org/schemas/sitemap/0.9')
      objects.map((n) => {
        if (!n) {
          return null
        }

        const { name, updatedAt } = n

        const url = `/tag/${name}`

        this.addSitemapDocument(xml, uri, {
          url,
          updatedAt: updatedAt.toISOString(),
          priority: 0.9,
        })
      })
    }
    // else {
    //   xml
    //     .startElement('sitemapindex')
    //     .writeAttribute('xmlns', 'https://www.sitemaps.org/schemas/sitemap/0.9')

    //   let i = 0

    //   while (pages > i) {
    //     i++

    //     const pageUri = uri.clone().addQuery({
    //       page: i,
    //     })

    //     xml
    //       .startElement('sitemap')
    //       .writeElement('loc', pageUri.toString())
    //       .endElement()
    //   }
    // }

    xml.endDocument()

    res.charset = 'utf-8'

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    res.end(xml.toString())

    return
  }
}
