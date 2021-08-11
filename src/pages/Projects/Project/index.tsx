import React, { useMemo } from 'react'
import {
  useProjectPageProjectsQuery,
  ProjectPageProjectsDocument,
  ProjectPageProjectsQuery,
  ProjectPageProjectsQueryVariables,
} from 'src/modules/gql/generated'

import View from './View'

import { Page, NextPageContextCustom } from '../../_App/interfaces'
import { useRouter, NextRouter } from 'next/router'

const getProjectVariables = (router: NextRouter | NextPageContextCustom) => {
  const variables: ProjectPageProjectsQueryVariables = {}

  const id = router.query.id

  if (id && typeof id === 'string') {
    variables.where = {
      id: {
        equals: id,
      },
    }
  } else {
    const uri = new URL(
      router.asPath || '',
      global.location?.origin || 'http://localhost'
    )

    const pathname = uri.pathname

    if (pathname && pathname !== '/') {
      variables.where = {
        // Resource: {
        //   OR: [
        //     {
        //       uri: pathname,
        //     },
        //     {
        //       uri: pathname + '/',
        //     },
        //   ],
        // },
        Resource_Project_ResourceToResource: {
          OR: [
            {
              uri: {
                equals: pathname,
              },
            },
            {
              uri: {
                equals: pathname + '/',
              },
            },
          ],
        },
      }
    }
  }

  return variables
}

const ProjectPage: Page = () => {
  const router = useRouter()

  const variables = useMemo(() => {
    return getProjectVariables(router)
  }, [router])

  const response = useProjectPageProjectsQuery({
    skip: !variables?.where,
    variables,
    onError: console.error,
  })

  const Project = response.data?.projects ? response.data?.projects[0] : null

  if (!Project) {
    return null
  }

  return (
    <>
      <View object={Project} />
    </>
  )
}

ProjectPage.getInitialProps = async (context) => {
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
    // TODO Adde canonical redirect
    statusCode: !Project ? 404 : undefined,
  }
}

export default ProjectPage
