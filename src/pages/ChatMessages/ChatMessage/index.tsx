import Head from 'next/head'
import React, { useMemo } from 'react'
import {
  useChatMessageQuery,
  ChatMessageDocument,
  ChatMessageQuery,
} from 'src/modules/gql/generated'

import View from './View'

import { Page } from '../../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

function getQueryParams(query: ParsedUrlQuery) {
  const id = query.id

  return {
    where: {
      id: id && typeof id === 'string' ? id : '',
    },
  }
}

const ChatMessagePage: Page = () => {
  const router = useRouter()

  const { query } = router

  const queryVariables = useMemo(() => {
    return {
      ...getQueryParams(query),
    }
  }, [query])

  const response = useChatMessageQuery({
    variables: queryVariables,
    onError: console.error,
  })

  return (
    <>
      <Head>
        <title>
          Сообщение. {(response.data?.object?.contentText || '').substr(0, 100)}
        </title>
        <meta
          name="description"
          content={(response.data?.object?.contentText || '').substr(0, 1000)}
        />
      </Head>

      <View object={response.data?.object} />
    </>
  )
}

ChatMessagePage.getInitialProps = async (context) => {
  const { apolloClient } = context

  // TODO Fix private rooms access
  const result = await apolloClient.query<ChatMessageQuery>({
    query: ChatMessageDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables: {
      ...getQueryParams(context.query),
    },
  })
  return {
    statusCode: !result.data.object ? 404 : undefined,
  }
}

export default ChatMessagePage
