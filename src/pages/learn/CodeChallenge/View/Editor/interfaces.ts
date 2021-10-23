/* eslint-disable @typescript-eslint/ban-types */
import useExecuteChallenge from '../../hooks/useExecuteChallenge'

export const modeMap = {
  css: 'css',
  html: 'html',
  js: 'javascript',
  jsx: 'javascript',
} as const

export type CodeChallengeFileExt = keyof typeof modeMap

export interface FccEditorProps {
  description?: string
  canFocus?: boolean
  // containerRef: any
  contents: string
  dimensions?: object
  executeChallenge: ReturnType<typeof useExecuteChallenge>
  ext: CodeChallengeFileExt
  fileKey?: string
  inAccessibilityMode?: boolean
  setAccessibilityMode?: Function
  setEditorFocusability: (show: boolean) => void
  theme?: string
  updateFile: Function
  challengeFiles?: {
    [x: string]: any
  }
  saveEditorContent: Function
}
