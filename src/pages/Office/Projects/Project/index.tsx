import React, { useMemo } from 'react'
import {
  useProjectPageProjectsQuery,
  ProjectPageProjectsDocument,
  ProjectPageProjectsQuery,
  ProjectPageProjectsQueryVariables,
} from 'src/modules/gql/generated'

import View from './View'

import { Page, NextPageContextCustom } from '../../../_App/interfaces'
import { useRouter, NextRouter } from 'next/router'
import { NextSeo } from 'next-seo'

const getProjectVariables = (router: NextRouter | NextPageContextCustom) => {
  const variables: ProjectPageProjectsQueryVariables = {}

  const id = router.query.projectId

  if (id && typeof id === 'string') {
    variables.where = {
      id,
    }
  }

  return variables
}

const OfficeProjectPage: Page = () => {
  const router = useRouter()

  const variables = useMemo(() => {
    return getProjectVariables(router)
  }, [router])

  const response = useProjectPageProjectsQuery({
    skip: !variables?.where,
    variables,
    onError: console.error,
  })

  const project = response.data?.projects ? response.data?.projects[0] : null

  if (!project) {
    return null
  }

  return (
    <>
      <NextSeo title={project.name} />

      <View project={project} />
    </>
  )
}

OfficeProjectPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  const variables = getProjectVariables(context)

  // TODO Fix private rooms access
  const response = variables.where
    ? await apolloClient.query<ProjectPageProjectsQuery>({
        query: ProjectPageProjectsDocument,

        /**
         * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
         * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
         */
        variables,
      })
    : null

  const Project = response?.data?.projects ? response?.data?.projects[0] : null

  return {
    layout: {
      variant: 'office',
    },
    // TODO Adde canonical redirect
    statusCode: !Project ? 404 : undefined,
  }
}

export default OfficeProjectPage
