import React, { useMemo } from 'react'
import {
  useUserQuery,
  UserDocument,
  UserQuery,
} from 'src/modules/gql/generated'

import View from './View'

import { Page, NextPageContextCustom } from '../../_App/interfaces'
import { useRouter, NextRouter } from 'next/router'
import { NextSeo } from 'next-seo'

function getVariables(router: NextRouter | NextPageContextCustom) {
  return {
    where: {
      username:
        router.query.username && typeof router.query.username === 'string'
          ? router.query.username
          : undefined,
    },
  }
}

export const UserPage: Page = () => {
  const router = useRouter()

  const variables = useMemo(() => {
    return getVariables(router)
  }, [router])

  const response = useUserQuery({
    variables,
    onError: console.error,
  })

  const user = response.data?.object

  if (!user) {
    return null
  }

  return (
    <>
      <NextSeo
        title={user.fullname || user.username || ''}
        description={`Страница пользователя ${user.fullname || user.username}`}
      />

      <View user={user} />
    </>
  )
}

UserPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  // TODO Fix private rooms access
  const result = await apolloClient.query<UserQuery>({
    query: UserDocument,

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
