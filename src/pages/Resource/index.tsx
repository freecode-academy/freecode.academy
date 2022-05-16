/**
 * Blog and Resource resources have same url mask like "/blog/..."
 * so we need load resource and switch like type
 */

import React, { useMemo } from 'react'
import {
  useResourceQuery,
  ResourceQueryVariables,
  ResourceType,
  ResourceDocument,
  ResourceQuery,
} from 'src/modules/gql/generated'

// import View from './View'

import { Page, NextPageContextCustom } from '../_App/interfaces'
// import { ResourcePageProps } from './interfaces'
// import { NextSeo } from 'next-seo'
import { useRouter, NextRouter } from 'next/router'

import { TopicPage } from '../Topics/Topic'

import { blogGetInitialProps, BlogPage } from '../Blogs/Blog'
import CommentPage from '../Comments/Comment'
import { TeamPage } from '../Teams/Team'

export const getResourceVariables = (
  router: NextRouter | NextPageContextCustom
) => {
  const uri = new URL(
    router.asPath || '',
    global.location?.origin || 'http://localhost'
  )

  const variables: ResourceQueryVariables = {
    where: {
      uri: decodeURI(uri.pathname),
    },
  }

  return variables
}

const ResourcePage: Page = (props) => {
  const router = useRouter()

  const variables = useMemo(() => getResourceVariables(router), [router])

  const response = useResourceQuery({
    variables,
    onError: console.error,
  })

  const object = response.data?.object

  if (!object) {
    return null
  }

  switch (object?.type) {
    case ResourceType.TOPIC:
      return <TopicPage {...props} />

    case ResourceType.COMMENT:
      return <CommentPage {...props} />

    case ResourceType.BLOG:
    case ResourceType.PERSONALBLOG:
      return <BlogPage {...props} />

    case ResourceType.TEAM:
      return <TeamPage {...props} />

    default:
      throw new Error('Unknown Resource type')
  }
}

ResourcePage.getInitialProps = async (context) => {
  const { apolloClient } = context

  const variables = getResourceVariables(context)

  // console.log('ResourcePage variables', variables);

  const queryResult = await apolloClient.query<ResourceQuery>({
    query: ResourceDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables,
  })

  const object = queryResult.data.object

  // console.log('ResourcePage object', object);

  switch (object?.type) {
    case ResourceType.TOPIC:
    case ResourceType.COMMENT:
    case ResourceType.TEAM:
      break

    case ResourceType.BLOG:
    case ResourceType.PERSONALBLOG:
      await blogGetInitialProps(context, object)

      break

    default:
      return {
        statusCode: 404,
      }
  }

  return {
    queryResult,
    statusCode: !object ? 404 : undefined,
  }
}

export default ResourcePage
