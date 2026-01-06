import Head from 'next/head'
import React, { useMemo } from 'react'
import { useTaskQuery, TaskDocument, TaskQuery } from 'src/gql/generated'

import { TaskView as View } from './View'

import { Page, NextPageContextCustom } from '../../_App/interfaces'
import { useRouter, NextRouter } from 'next/router'

function getVariables(router: NextRouter | NextPageContextCustom) {
  return {
    where: {
      id:
        router.query.id && typeof router.query.id === 'string'
          ? router.query.id
          : '',
    },
  }
}

export const TaskPage: Page = () => {
  const router = useRouter()

  const variables = useMemo(() => {
    return getVariables(router)
  }, [router])

  const response = useTaskQuery({
    variables,
    onError: console.error,
  })

  return useMemo(() => {
    if (!response.data?.object) {
      return null
    }

    return (
      <>
        <Head>
          <title>{response.data?.object?.name}</title>
          <meta
            name="description"
            content={`Task: ${response.data?.object?.name} — view details, progress, and collaborate.`}
          />
        </Head>

        <View object={response.data?.object} loading={response.loading} />
      </>
    )
  }, [response.data?.object, response.loading])
}

TaskPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  // TODO Fix private rooms access
  const result = await apolloClient.query<TaskQuery>({
    query: TaskDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables: getVariables(context),
  })
  return {
    statusCode: !result.data.object ? 404 : undefined,
  }
}
