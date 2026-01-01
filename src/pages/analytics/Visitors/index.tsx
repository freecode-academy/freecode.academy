import { NextSeo } from 'next-seo'
import { Page } from '../../_App/interfaces'

/**
 * Просмотр статистики страниц с ошибками
 */
const VisitorsPage: Page = () => {
  return (
    <>
      <NextSeo
        noindex
        title="Page Analytics"
        description="View page statistics and error tracking."
      />
    </>
  )
}

export default VisitorsPage
