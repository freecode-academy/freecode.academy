import React, { useMemo } from 'react'
import {
  useResourceQuery,
  // useUpdateTeamProcessorMutation,
} from 'src/modules/gql/generated'

import { getResourceVariables } from 'src/pages/Resource'

import { TeamView } from './View'

import { Page } from '../../_App/interfaces'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

export const TeamPage: Page = () => {
  const router = useRouter()

  // const [mutate] = useUpdateTeamProcessorMutation()

  const variables = useMemo(() => getResourceVariables(router), [router])

  const queryResult = useResourceQuery({
    variables,
    skip: !variables.where,
    onError: console.error,
  })

  const object = queryResult.data?.object
  const name = object?.name

  return (
    <>
      <NextSeo title={name || ''} description={object?.name || ''} />

      {object ? <TeamView resource={object} /> : null}
    </>
  )
}

/**
 * @deprecated
 * Do not use TeamPage directly. Use ResourcePage instead
 */
// export default TeamPage
