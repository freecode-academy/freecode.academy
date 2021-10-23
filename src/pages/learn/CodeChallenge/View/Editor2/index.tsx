import React, { useCallback } from 'react'
import { useMonacoEditor } from 'src/hooks/useMonacoEditor'
import { modeMap } from '../Editor'
import { CodeChallengeEditorProps } from './interfaces'

export const CodeChallengeEditor: React.FC<CodeChallengeEditorProps> = ({
  contents,
  ext,
  updateFile,
  // fileKey,
  // ...other
}) => {
  // console.log('CodeChallengeEditor other', other)

  // console.log('CodeChallengeEditor contents', contents)

  const language = modeMap[ext]

  const onChange = useCallback(
    (editorValue: string) => {
      updateFile({
        // key: fileKey,
        editorValue,
      })
    },
    [updateFile]
  )

  const { editor } = useMonacoEditor({
    active: true,
    editorProps: {
      // source: object.components[0]?.props.text || '',
      source: contents,
      // ext: 'css',
      // saveEditorContent,
      // updateFile,
      language,
      onChangeContent: onChange,
    },
  })

  return <>{editor}</>
}
