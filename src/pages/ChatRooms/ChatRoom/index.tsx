import Head from 'next/head'
import React, { useMemo } from 'react'
import {
  useChatRoomQuery,
  ChatRoomDocument,
  ChatRoomQuery,
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

const ChatRoomPage: Page = () => {
  const router = useRouter()

  const { query } = router

  const queryVariables = useMemo(() => {
    return {
      ...getQueryParams(query),
    }
  }, [query])

  const response = useChatRoomQuery({
    variables: queryVariables,
    onError: console.error,
  })

  return (
    <>
      <Head>
        <title>Чат-комната {response.data?.object?.name}</title>
        <meta
          name="description"
          content={`Все сообщения в чат-комнате "${response.data?.object?.name}"`}
        />
      </Head>

      <View object={response.data?.object} />
    </>
  )
}

ChatRoomPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  // TODO Fix private rooms access
  const result = await apolloClient
    .query<ChatRoomQuery>({
      query: ChatRoomDocument,

      /**
       * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
       * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
       */
      variables: {
        ...getQueryParams(context.query),
      },
    })
    .catch((error) => {
      console.error(error)

      return error
    })

  if (result instanceof Error) {
    return {
      statusCode: 410,
    }
  }

  return {
    statusCode: !result.data.object ? 404 : undefined,
  }
}

export default ChatRoomPage
