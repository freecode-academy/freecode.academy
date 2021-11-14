import { CodeChallengeFileExt } from '../Editor'

export type CodeChallengeEditorProps = {
  contents: string

  ext: CodeChallengeFileExt

  // fileKey?: string

  updateFile: ({
    editorValue,
  }: {
    // key: string;
    editorValue: string
  }) => void

  executeChallenge: () => Promise<void>
}
