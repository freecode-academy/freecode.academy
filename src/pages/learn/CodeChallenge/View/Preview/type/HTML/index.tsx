/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { concatHtml } from 'src/pages/learn/CodeChallenge/rechallenge/builders'
import Context from '../../../../Context'
import { ChallengeTestIFrameElement } from '../../interfaces'

const PreviewHtml: React.FC = () => {
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

    const html = challenge
      ? concatHtml({
          required,
          template: challenge?.template,
          files: [
            {
              contents: context?.challengeData.file.contents || '',
            },
          ],
        })
      : '<head /><body />'

    frame.contentDocument?.open()
    frame.contentDocument?.write(html)
    frame.contentDocument?.close()
  }, [
    challenge,
    context?.challenge.required,
    context?.challengeData.file.contents,
    frame,
  ])

  const frameContent = useMemo(() => {
    return (
      <iframe
        className={'challenge-preview-frame'}
        id="tests-frame"
        title="Challenge Preview"
        ref={setFrame}
        // onLoad={frameOnLoaded}
      />
    )
  }, [])

  return frameContent
}

export default PreviewHtml
