import { NextSeo } from 'next-seo'
import { OpenAiChat } from 'src/components/ai/OpenAiChat'
import { Page } from '../_App/interfaces'

export const AiPage: Page = () => {
  return (
    <>
      <NextSeo title="AI" description="AI assistants" noindex nofollow />

      <OpenAiChat />
    </>
  )
}
