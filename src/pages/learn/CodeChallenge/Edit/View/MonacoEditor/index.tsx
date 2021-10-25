/* eslint-disable no-console */
import { editor } from 'monaco-editor'
import React, { useCallback } from 'react'
import { useMonacoEditor } from 'src/hooks/useMonacoEditor'
import { monacoEditorInstance } from 'src/hooks/useMonacoEditor/MonacoEditor/interfaces'
import { CodeChallengeFragment } from 'src/modules/gql/generated'
import { CodeChallengeEditMonacoEditorProps } from './interfaces'

/**
 * Не нашел в monaco возможности перехватить с какой именно комбинацией клавишь была вызвана команда,
 * поэтому пришлось вынести вот в такую кастомную функцию.
 */
const runCommandReplace = (
  editor: editor.ICodeEditor,
  language: 'js' | 'html' | 'css'
) => {
  const selection = editor.getSelection()

  const model = editor.getModel()

  if (!model || !selection) {
    return
  }

  const value = selection ? model.getValueInRange(selection) : null

  model.pushEditOperations(
    [],
    [
      {
        forceMoveMarkers: true,
        range: selection,
        text: `<pre class="language-${language}">${value}</pre>`,
      },
    ],
    () => null
  )
}

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

  const onEditorInit = useCallback(
    ({ editorInstance, monaco }: monacoEditorInstance) => {
      editorInstance.addAction({
        id: 'wrap-by-pre-js',
        label: 'Wrap by <pre class="language-js">',
        keybindings: [
          monaco.KeyMod.chord(
            monaco.KeyMod.Shift | monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_R,
            monaco.KeyCode.KEY_J
          ),
        ],
        run: (editor) => runCommandReplace(editor, 'js'),
      })

      editorInstance.addAction({
        id: 'wrap-by-pre-html',
        label: 'Wrap by <pre class="language-html">',
        keybindings: [
          monaco.KeyMod.chord(
            monaco.KeyMod.Shift | monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_R,
            monaco.KeyCode.KEY_H
          ),
        ],
        run: (editor) => runCommandReplace(editor, 'html'),
      })

      editorInstance.addAction({
        id: 'wrap-by-pre-css',
        label: 'Wrap by <pre class="language-css">',
        keybindings: [
          monaco.KeyMod.chord(
            monaco.KeyMod.Shift | monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_R,
            monaco.KeyCode.KEY_C
          ),
        ],
        run: (editor) => runCommandReplace(editor, 'css'),
      })
    },
    []
  )

  const { editor } = useMonacoEditor({
    active: true,
    editorProps: {
      language: 'html',
      source: value || '',
      onChangeContent,
      onEditorInit,
    },
  })

  return <>{editor}</>
}
