import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { useResourceQuery } from 'src/modules/gql/generated'
import { getResourceVariables } from 'src/pages/Resource'
import { Page } from 'src/pages/_App/interfaces'
import Comment from 'src/uikit/Comments/Comment'

/**
 * Страница комментария
 */
const CommentPage: Page = () => {
  const router = useRouter()

  const variables = useMemo(() => getResourceVariables(router), [router])

  const response = useResourceQuery({
    variables,
    onError: console.error,
  })

  const object = response.data?.object

  if (!object) {
    return null
  }

  let description: string | undefined = undefined

  if (object.Topic) {
    description = `Комментарий к топику "${object.Topic.name}"`
  } else if (object.Task) {
    description = `Комментарий к задаче "${object.Task.name}"`
  } else {
    description = object.name || undefined
  }

  return (
    <>
      <NextSeo title={object.name || ''} description={description} />

      <Comment linkType="target" object={object} />
    </>
  )
}

/**
 * Данные объекта берутся в src/pages/Resource,
 * поэтому не нужно дополнительно вызывать getInitialProps
 */

export default CommentPage
