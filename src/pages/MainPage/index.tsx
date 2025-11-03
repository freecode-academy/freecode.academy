/**
 * Blog and MainPage resources have same url mask like "/blog/..."
 * so we need load resource and switch like type
 */

import React from 'react'

import { Page } from '../_App/interfaces'
import { NextSeo } from 'next-seo'
import { MainPageGlobalStyled, MainPageStyled } from './styles'
import {
  SortOrder,
  TopicsConnectionDocument,
  TopicsConnectionQuery,
  TopicsConnectionQueryVariables,
  useTopicsConnectionQuery,
} from 'src/gql/generated'
import { TopicView } from '../Topics/Topic/View'
// import { HeroSection } from './Promo'
// import { MainPageUsers } from './Users'

const variables: TopicsConnectionQueryVariables = {
  first: 1,
  orderBy: [
    {
      createdAt: SortOrder.DESC,
    },
  ],
  where: {
    Blog: {
      equals: 'cjoe898wk08bp0d969ncb7s6b',
    },
  },
  withContent: true,
}

export const MainPage: Page = () => {
  const mainPageTopic = useTopicsConnectionQuery({
    variables,
  })

  const topic = mainPageTopic.data?.resources.at(0)

  return (
    <MainPageStyled>
      <NextSeo
        title="FreeCode.Academy"
        description="Бесплатные онлайн курсы по JavaScript, React, NextJS и не только"
      />
      <MainPageGlobalStyled />

      {/* <HeroSection /> */}

      {/* <MainPageUsers /> */}

      {topic && (
        <TopicView topic={topic} variant="full" canChangeBlog={false} />
      )}
    </MainPageStyled>
  )
}

MainPage.getInitialProps = async ({ apolloClient }) => {
  await apolloClient
    .query<TopicsConnectionQuery, TopicsConnectionQueryVariables>({
      query: TopicsConnectionDocument,
      variables,
    })
    .catch(console.error)

  return {}
}
