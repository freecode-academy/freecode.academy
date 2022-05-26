import React, { useMemo } from 'react'
import {
  useCodeChallengeQuery,
  CodeChallengeDocument,
  CodeChallengeQuery,
  CodeChallengeQueryVariables,
} from 'src/modules/gql/generated'

import { useRouter, NextRouter } from 'next/router'

import { Page, NextPageContextCustom } from '../../_App/interfaces'
import {
  DesktopLayoutProps,
  DesktopLayoutTabIndex,
} from './View/DesktopLayout/interfaces'
import { CodeChallengePageInitial } from './initial'

const getCodeChallengeVariables = (
  router: NextRouter | NextPageContextCustom
) => {
  const slug = router.query?.slug

  if (!slug || !Array.isArray(slug) || !slug.length || slug.length > 3) {
    return {}
  }

  const { 0: id, 2: topicId } = slug

  // const tabIndex: DesktopLayoutProps["tabIndex"] = slug[1] && ["", "discuss"].indexOf(slug[1]) !== -1 ? slug[1] : undefined;

  let tabIndex: DesktopLayoutProps['tabIndex']

  if (slug[1]) {
    if (slug[1] === DesktopLayoutTabIndex.Discuss) {
      tabIndex = slug[1]
    } else {
      return {}
    }
  } else {
    tabIndex = DesktopLayoutTabIndex.Root
  }

  // if (tabIndex !== undefined && (tabIndex !== "")) {
  //   return {}
  // }

  // const id =
  //   router.query.id && typeof router.query.id === 'string'
  //     ? router.query.id
  //     : null

  const variables: CodeChallengeQueryVariables = {
    where: {
      id,
    },
  }

  return {
    variables,
    tabIndex,
    topicId,
  }
}

export const CodeChallengePage: Page = () => {
  const router = useRouter()

  const { variables, tabIndex, topicId } = useMemo(() => {
    return getCodeChallengeVariables(router)
  }, [router])

  const response = useCodeChallengeQuery({
    skip: !variables?.where.id,
    variables,
    onError: console.error,
  })

  const object = response.data?.codeChallenge

  if (!object) {
    return null
  }

  return (
    <CodeChallengePageInitial
      /**
       * Так как слишком много всего инициализируется жестко и не всегда правильно
       * инициализируется при смене урока,
       * вынес основную логику в отдельный компонент и фиксирую его ключом.
       */
      key={object?.id}
      object={object}
      tabIndex={tabIndex}
      topicId={topicId}
    />
  )
}

CodeChallengePage.getInitialProps = async (context) => {
  const { apolloClient } = context

  const { variables, tabIndex, topicId } = getCodeChallengeVariables(context)

  const result = variables?.where.id
    ? await apolloClient.query<CodeChallengeQuery>({
        query: CodeChallengeDocument,

        /**
         * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
         * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
         */
        variables,
      })
    : null

  return {
    statusCode:
      !result?.data.codeChallenge ||
      (topicId &&
        (tabIndex !== DesktopLayoutTabIndex.Discuss ||
          result?.data.codeChallenge.Topic?.id !== topicId))
        ? 404
        : undefined,
    layout: {
      variant: 'fullwidth',
    },
  }
}
