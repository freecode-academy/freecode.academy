import React, { useCallback } from 'react'
import { useMonacoEditor } from 'src/hooks/useMonacoEditor'
import { CodeChallengeFragment } from 'src/modules/gql/generated'
import { CodeChallengeEditMonacoEditorProps } from './interfaces'

export const CodeChallengeEditMonacoEditor = <
  T extends keyof CodeChallengeFragment
>({
  name,
  value,
  setValue,
}: CodeChallengeEditMonacoEditorProps<T>) => {
  const onChangeContent = useCallback(
    (content: string) => {
      setValue(name, content)
    },
    [name, setValue]
  )

  const { editor } = useMonacoEditor({
    active: true,
    editorProps: {
      language: 'html',
      source: value || '',
      onChangeContent,
    },
  })

  return <>{editor}</>
}
