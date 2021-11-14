import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'

export type monacoEditorInstance = {
  editorInstance: monacoEditor.editor.IStandaloneCodeEditor
  monaco: typeof monacoEditor
}

export type MonacoEditorProps = {
  source: string
  language: 'javascript' | 'css' | 'html'

  /**
   * Коллбэк на изменение контента
   */
  // onChange?: (content: string) => void

  onChangeContent?: (content: string) => void

  /**
   * Коллбэк на инициализацию редактора
   */
  onEditorInit?: (editorInstance: monacoEditorInstance) => void
}
