import React, { useCallback, useRef, useState } from 'react'
import {
  CommentCreateFormFooterStyled,
  CommentCreateFormStyled,
} from './styles'
import {
  ResourceDocument,
  useCreateCommentProcessorMutation,
} from 'src/gql/generated'
import { useSnackbar } from 'src/components/Snackbar'
import { Button } from 'src/components/Button'
import dynamic from 'next/dynamic'

const MarkdownEditor = dynamic(
  () => import('src/components/Markdown/Editor').then((r) => r.MarkdownEditor),
  {
    ssr: false,
  }
)

type CommentCreateFormProps = {
  topicID: string
}

export const CommentCreateForm: React.FC<CommentCreateFormProps> = ({
  topicID,
  ...other
}) => {
  const [editorKey, editorKeySetter] = useState(Math.random())

  const [value, valueSetter] = useState('')
  const valueRef = useRef(value)
  valueRef.current = value

  const { addMessage } = useSnackbar() || {}

  const [createCommentMutation, { loading: inRequest }] =
    useCreateCommentProcessorMutation({
      refetchQueries: [ResourceDocument],
    })

  const onSubmit = useCallback<React.FormEventHandler>(
    async (event) => {
      event.preventDefault()

      try {
        await createCommentMutation({
          variables: {
            data: {
              content: valueRef.current,
              topicID,
            },
          },
        }).then((r) => {
          if (r.data?.response.data) {
            valueSetter('')
            editorKeySetter(Math.random())
            addMessage?.('Комментарий успешно опубликован', {
              variant: 'success',
            })
          } else {
            throw new Error(r.data?.response.message || 'Unknow error')
          }
        })
      } catch (error) {
        addMessage?.((error as Error).message || 'Ошибка выполнения запроса', {
          variant: 'error',
        })
      }
    },
    [addMessage, createCommentMutation, topicID]
  )

  return (
    <CommentCreateFormStyled onSubmit={onSubmit} {...other}>
      <h3>Написать комментарий</h3>
      <MarkdownEditor key={editorKey} value={value} onChange={valueSetter} />

      <CommentCreateFormFooterStyled>
        <Button type="submit" disabled={inRequest}>
          Опубликовать
        </Button>
      </CommentCreateFormFooterStyled>
    </CommentCreateFormStyled>
  )
}
