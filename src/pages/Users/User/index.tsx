import React, { useMemo } from 'react'
import {
  UsersQueryVariables,
  QueryMode,
  useUsersQuery,
  UsersDocument,
  UsersQuery,
} from 'src/gql/generated'

import { UserPageView } from './View'

import { NextPageContextCustom, Page } from '../../_App/interfaces'
import { useRouter, NextRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { createUserLink } from 'src/uikit/Link/User'

/**
 * Здесь сейчас расчет на то, что точно передан или айди, или юзернейм
 */
function getVariables(
  router: NextRouter | NextPageContextCustom
): UsersQueryVariables {
  let where: UsersQueryVariables['where']

  const id =
    router.query.id && typeof router.query.id === 'string'
      ? router.query.id
      : undefined
  const username =
    router.query.username && typeof router.query.username === 'string'
      ? router.query.username
      : undefined

  if (id) {
    where = {
      id: {
        equals: id,
      },
    }
  } else {
    where = {
      username: {
        equals: username,
        mode: QueryMode['INSENSITIVE'],
      },
    }
  }

  return {
    where,
    withEducationProjects: true,
    first: 1,
  }
}

export const UserPage: Page = () => {
  const router = useRouter()

  const variables = useMemo(() => {
    return getVariables(router)
  }, [router])

  const response = useUsersQuery({
    variables,
    onError: console.error,
  })

  const user = response.data?.users[0]

  if (!user) {
    return null
  }

  return (
    <>
      <NextSeo
        title={user.fullname || user.username || ''}
        description={`Страница пользователя ${user.fullname || user.username}`}
        canonical={createUserLink(user)}
      />

      <UserPageView user={user} />
    </>
  )
}

UserPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  // TODO Fix private rooms access
  const result = await apolloClient.query<UsersQuery>({
    query: UsersDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables: getVariables(context),
  })
  return {
    statusCode: !result.data.users[0] ? 404 : undefined,
  }
}
