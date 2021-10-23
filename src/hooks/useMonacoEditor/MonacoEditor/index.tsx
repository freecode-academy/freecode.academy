import React, { useCallback, useEffect, useMemo, useState } from 'react'
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'

import loader from '@monaco-editor/loader'
import { MonacoEditorProps } from './interfaces'

export const MonacoEditor: React.FC<MonacoEditorProps> = ({
  source,
  language,
  // onChange,
  onChangeContent,
  onEditorInit,
}) => {
  const [initialValue] = useState(source)

  const [editorContainer, editorContainerSetter] =
    useState<HTMLDivElement | null>(null)

  const editorContainerRef = useCallback((el: HTMLDivElement) => {
    editorContainerSetter(el)
  }, [])

  /**
   * Флаг того, что редактор инициализирован.
   * Проблема просто в том, что редактор загружается из CDN не сразу,
   * а когда мы начинаем редактирование. На слобом интернете задержка очень ощутимая,
   * долгое время редактор выглядит пустым.
   */
  // const [
  //   /**
  //    * @deprecated
  //    */
  //   editorInited,
  //   editorInitedSetter
  // ] = useState(false)

  const [editorInstance, editorInstanceSetter] =
    useState<monacoEditor.editor.IStandaloneCodeEditor | null>(null)

  /**
   * Init editor
   */
  // TODO Сейчас у нас редактор не реагирует на изменения извне

  /**
   * Хендлер на создание редактора
   */
  useEffect(() => {
    if (!editorInstance) {
      return
    }

    onEditorInit && onEditorInit(editorInstance)
  }, [editorInstance, onEditorInit])

  /**
   * Навешиваем обработчик на изменения
   */
  useEffect(() => {
    if (!editorInstance) {
      return
    }

    const model = editorInstance.getModel()

    const modelOnChange = model?.onDidChangeContent((_event) => {
      const value = model.getValue()

      // console.log(
      //   'ContentEditorHTMLEditorMonacoEditor onDidChangeContent event',
      //   event
      // )
      // console.log(
      //   'ContentEditorHTMLEditorMonacoEditor onDidChangeContent editorInstance',
      //   value
      // )

      // TODO Перепроверить логику
      /**
       * event.isFlush - признак того, что редактор был обновлен с полностью новым значением.
       * Ожидается, что здесь мы будем отлавливать только ручные изменения.
       * Главная задача что не надо отлавливать - это входящие изменения извне, то есть, к примеру,
       * когда было установлено новое значение, например, из кеша. В таком случае не должн
       * срабатывать коллбэк на изменение, потому что фактически его не было.
       */
      // if (!event.isFlush) {

      //   onChangeContent && onChangeContent(value)
      // }

      /**
       * Обновляем значение только если отличается от внешнего
       */
      if (value !== source) {
        onChangeContent && onChangeContent(value)
      }
    })

    return () => {
      modelOnChange?.dispose()
    }
  }, [editorInstance, onChangeContent, source])

  /**
   * Обработчик на изменение контента
   */
  useEffect(() => {
    if (!editorInstance) {
      return
    }

    const model = editorInstance.getModel()

    if (!model) {
      return
    }

    if (source !== model.getValue()) {
      model.setValue(source)
      // model.pushEditOperations(
      //   [],
      //   [
      //     {
      //       range: model.getFullModelRange(),
      //       text: source,
      //     },
      //   ]
      // );
    }
  }, [editorInstance, source])

  /**
   * Очень важно: если извне передаются переменные, обновляемые при каждом изменении в редакторе,
   * то контент редактора перерисовывается повторно и возникают проблемы (курсор сбрасывается, контент не изменяется).
   * Поэтому надо четко следить за каждым изменением
   */
  useEffect(() => {
    if (!editorContainer) {
      return
    }

    let editorInstance: monacoEditor.editor.IStandaloneCodeEditor | null = null
    let model: monacoEditor.editor.ITextModel | null = null

    loader.init().then((monaco: typeof monacoEditor) => {
      // editorInitedSetter(true)

      editorInstance = monaco.editor.create(editorContainer, {
        // value: source,
        value: initialValue,
        language,
        formatOnPaste: true,
        // formatOnType: true,
        automaticLayout: true,
        insertSpaces: true,
        tabSize: 2,
        wordWrap: 'on',
        minimap: {
          enabled: false,
        },
      })

      // console.log('editorInstance._actions["editor.action.formatDocument"]', editorInstance._actions["editor.action.formatDocument"]);

      // model = monaco.editor.getModels()[0]
      model = editorInstance.getModel()

      // model?.onDidChangeContent((_event) => {
      //   // console.log('onDidChangeContent event', event)
      //   // console.log(
      //   //   'onDidChangeContent editorInstance',
      //   //   editorInstance?.getValue()
      // editorInitedSetter(true)
      //   // )
      //   editorInstance && onChange(editorInstance.getValue())
      // })

      editorInstanceSetter(editorInstance)
    })

    return () => {
      /**
       * Если есть измененный контент, сохраняем его
       */
      /**
       * Убрал этот блок, так как его суть срабатывание на размонтирование,
       * а нужен именно обработчик на изменение контента
       */
      // if (model) {
      //   const value = model.getValue()

      //   if (value !== source) {
      //     onChange && onChange(value)
      //   }
      // }

      /**
       * Destroy editor
       */
      editorInstance?.dispose()
      model?.dispose()
    }
  }, [editorContainer, initialValue, language, onEditorInit])

  return useMemo(() => {
    return (
      <div
        ref={editorContainerRef}
        style={{
          // height: 600,
          // height: '60vh',
          minHeight: '60vh',
          height: '100%',
          // border: '1px solid',
        }}
      >
        {/* 
        Пока редактор не загрузился, выводим исходный код
        */}
        {!editorInstance ? (
          <>
            <div
              style={{
                marginBottom: 15,
              }}
            >
              Редактор загружается...
            </div>
            {/* {source} */}
          </>
        ) : null}
      </div>
    )
  }, [editorContainerRef, editorInstance])
}

export default MonacoEditor
