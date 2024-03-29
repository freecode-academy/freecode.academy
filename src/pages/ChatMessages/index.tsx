import Head from 'next/head'
import React, { useMemo } from 'react'
import {
  ChatMessagesConnectionDocument,
  ChatMessagesConnectionQueryVariables,
  useChatMessagesConnectionQuery,
  // ChatMessageFragment,
} from 'src/modules/gql/generated'

import { Page } from '../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import ChatMessagesView from './View'

const first = 10

const topicsVariables: ChatMessagesConnectionQueryVariables = {
  where: {},
  first,
}

function getQueryParams(query: ParsedUrlQuery) {
  let skip: number | undefined

  const page =
    (query.page && typeof query.page === 'string' && parseInt(query.page)) || 0

  if (page > 1) {
    skip = (page - 1) * first
  }

  return {
    skip,
    first,
    page,
  }
}

const ChatMessagesPage: Page = () => {
  const router = useRouter()

  const { query } = router

  const { page, ...queryVariables } = useMemo(() => {
    return {
      ...topicsVariables,
      ...getQueryParams(query),
    }
  }, [query])

  // TODO Fix reload on frontend due user permissions
  const response = useChatMessagesConnectionQuery({
    variables: queryVariables,
    onError: console.error,
  })

  const { variables } = response

  return (
    <>
      <Head>
        <title>Чат-сообщения</title>
        <meta name="description" content="Все чат-сообщения" />
      </Head>

      <ChatMessagesView
        objects={response.data?.chatMessages || []}
        limit={variables?.first}
        page={page}
        total={response.data?.chatMessagesCount || 0}
      />
    </>
  )
}

ChatMessagesPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  await apolloClient.query({
    query: ChatMessagesConnectionDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables: {
      ...topicsVariables,
      ...getQueryParams(context.query),
    },
  })

  return {}
}

export default ChatMessagesPage
