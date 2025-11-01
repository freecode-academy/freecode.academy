import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'

import { TopicEditForm } from '../Topic/Form'

export const TopicCreatePage: Page = () => {
  return (
    <>
      <NextSeo title="Create topic" noindex nofollow />

      <TopicEditForm topic={undefined} cancelHandler={undefined} />
    </>
  )
}
