import { NextSeo } from 'next-seo'
import React from 'react'
import {
  DonatesDocument,
  DonatesQueryVariables,
  SortOrder,
  useDonatesQuery,
} from 'src/modules/gql/generated'
import { Page } from '../_App/interfaces'
import { DonatesPageView } from './View'

const variables: DonatesQueryVariables = {
  orderBy: {
    date: SortOrder.DESC,
  },
}

export const DonatesPage: Page = () => {
  const response = useDonatesQuery({
    variables,
  })

  return (
    <>
      <NextSeo title="Список донатов" />

      <DonatesPageView donates={response.data?.donates ?? []} />
    </>
  )
}

DonatesPage.getInitialProps = async ({ apolloClient }) => {
  await apolloClient.query({
    query: DonatesDocument,
    variables,
  })

  return {}
}
