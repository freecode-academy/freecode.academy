const XMLWriter = require('xml-writer')

import URI from 'urijs'
import { Request, Response } from 'express'

import { Sitemap } from './Sitemap'
import { prismaClient } from '../prismaClient'
import { TagStatus } from '@prisma/client'

const limit = 1000

const usersWhere = {
  active: {
    equals: true,
  },
  deleted: {
    equals: false,
  },
} as const

const resourcesWhere = {
  published: {
    equals: true,
  },
  searchable: {
    equals: true,
  },
  deleted: {
    equals: false,
  },
} as const

const tagsWhere = {
  status: {
    not: {
      equals: TagStatus.Blocked,
    },
  },
} as const

export class SitemapBuilder extends Sitemap {
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
        res.status(404)
        res.send('Invalid section')
    }
  }

  async renderRootSitemap(_req: Request, res: Response, uri: URI) {
    const cleanUri = uri.clone().query(true)

    const xml = new XMLWriter()

    xml.startDocument('1.0', 'UTF-8')

    xml
      .startElement('sitemapindex')
      .writeAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')

    const mainUri = cleanUri.clone().query({
      section: 'main',
    })

    xml
      .startElement('sitemap')
      .writeElement('loc', mainUri.toString())
      .endElement()

    await this.addUsersSitemaps(xml, uri)

    await this.addResourcesSitemaps(xml, uri)

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

  async addUsersSitemaps(xml: any, uri: URI) {
    const usersCount = await prismaClient.user.count({
      where: usersWhere,
    })

    const pages = Math.ceil(usersCount / limit)

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

    const users = await prismaClient.user.findMany({
      where: usersWhere,
      take: limit,
      skip: page && page > 1 ? (page - 1) * limit : undefined,
      orderBy: {
        updatedAt: 'desc',
      },
      select: {
        id: true,
        username: true,
        updatedAt: true,
      },
    })

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

        const { id, username, updatedAt } = user

        this.addSitemapDocument(xml, uri, {
          url: username ? `/profile/${username}` : `/profile/id/${id}`,
          updatedAt: updatedAt.toISOString(),
          priority: 0.8,
        })
      })
    }

    xml.endDocument()

    res.charset = 'utf-8'

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    res.end(xml.toString())

    return
  }

  async addResourcesSitemaps(xml: any, uri: URI) {
    const resourcesCount = await prismaClient.resource.count({
      where: resourcesWhere,
    })

    const pages = Math.ceil(resourcesCount / limit)

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

    const objects = await prismaClient.resource.findMany({
      where: resourcesWhere,
      take: limit,
      skip: page && page > 1 ? (page - 1) * limit : undefined,
      orderBy: {
        updatedAt: 'desc',
      },
      select: {
        uri: true,
        updatedAt: true,
      },
    })

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

    xml.endDocument()

    res.charset = 'utf-8'

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    res.end(xml.toString())

    return
  }

  async addTagsSitemaps(xml: any, uri: URI) {
    const usersCount = await prismaClient.tag.count({
      where: tagsWhere,
    })

    const pages = Math.ceil(usersCount / limit)

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

    const objects = await prismaClient.tag.findMany({
      where: tagsWhere,
      take: limit,
      skip: page && page > 1 ? (page - 1) * limit : undefined,
      orderBy: {
        updatedAt: 'desc',
      },
      select: {
        name: true,
        updatedAt: true,
      },
    })

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

    xml.endDocument()

    res.charset = 'utf-8'

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    res.end(xml.toString())

    return
  }
}
