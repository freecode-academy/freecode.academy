import React, { useCallback } from 'react'
import { useMonacoEditor } from 'src/hooks/useMonacoEditor'
import { modeMap } from '../Editor'
import { CodeChallengeEditorProps } from './interfaces'
import { monacoEditorInstance } from 'src/hooks/useMonacoEditor/MonacoEditor/interfaces'

export const CodeChallengeEditor: React.FC<CodeChallengeEditorProps> = ({
  contents,
  ext,
  updateFile,
  executeChallenge,
  // fileKey,
  // ...other
}) => {
  // console.log('CodeChallengeEditor other', other)

  // console.log('CodeChallengeEditor contents', contents)

  const language = modeMap[ext]

  const onEditorInit = useCallback(
    ({ editorInstance, monaco }: monacoEditorInstance) => {
      editorInstance.addAction({
        id: 'execute-challenge',
        label: 'Run tests',
        keybindings: [
          monaco.KeyMod.chord(
            monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
            monaco.KeyCode.Unknown
          ),
        ],
        /**
         * Надо именно так, потому что executeChallenge - это хук,
         * который меняется при повторном рендеринге.
         */
        run: () => {
          return executeChallenge()
        },
      })

      monaco.KeyMod.CtrlCmd
    },
    [executeChallenge]
  )

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
      onEditorInit,
    },
  })

  return <>{editor}</>
}
