import React, { useContext, useEffect, useMemo, useState } from 'react'
import { concatHtml } from 'src/pages/learn/CodeChallenge/rechallenge/builders'
import Context from '../../../../Context'
import { ChallengeTestIFrameElement } from '../../interfaces'
import * as Babel from '@babel/standalone'

export const PreviewHtml: React.FC = () => {
  const [frame, setFrame] = useState<ChallengeTestIFrameElement | null>(null)

  const context = useContext(Context)

  const challenge = context?.challenge

  useEffect(() => {
    if (!frame || !frame.contentDocument) {
      return
    }

    const required = (context?.challenge.required ?? []).slice(0) as {
      src?: string
      link?: string
    }[]

    required.push({
      src: 'https://code.jquery.com/jquery-3.5.1.min.js',
    })

    function transformScript(element: HTMLElement) {
      const scriptTags = element.querySelectorAll('script')
      scriptTags.forEach((script) => {
        try {
          if (script.innerHTML) {
            const result = Babel.transform(script.innerHTML, {
              ast: true,
              sourceType: 'script',
              code: true,
              presets: ['es2015'],
            })

            if (result?.code) {
              script.innerHTML = result?.code
            }
          }
        } catch (error) {
          console.error('Babel transform error', error)
        }
      })
    }

    const html = challenge
      ? concatHtml({
          required,
          template: challenge?.template,
          files: [
            {
              head: context?.challengeData.file.head || '',
              contents: context?.challengeData.file.contents || '',
              tail: context?.challengeData.file.tail || '',
            },
          ],
        })
      : '<head /><body />'

    /**
     * Создаем новый документ
     */
    const doc =
      global.document.implementation.createHTMLDocument('New Document')

    doc.open()
    doc.write(html)
    doc.close()

    /**
     * Транспилируем скрипты
     */
    transformScript(doc.body)

    /**
     * Записываем в фрейм контент, чтобы инициализация прошла в его области видимости
     */
    frame.contentDocument?.open()
    frame.contentDocument?.write(doc.documentElement.outerHTML)
    frame.contentDocument?.close()
  }, [
    challenge,
    context?.challenge.required,
    context?.challengeData.file.contents,
    context?.challengeData.file.head,
    context?.challengeData.file.tail,
    frame,
  ])

  const frameContent = useMemo(() => {
    return (
      <iframe
        // onLoad={frameOnLoaded}
        className={'challenge-preview-frame'}
        id="tests-frame"
        title="Challenge Preview"
        ref={setFrame}
      />
    )
  }, [])

  return frameContent
}
