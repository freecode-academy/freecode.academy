import React, { useMemo } from 'react'
import { MeUserFragment } from 'src/gql/generated'
import { OpenWebUiConnect } from './Connect'

type OpenWebUiProps = {
  currentUser: MeUserFragment
}

export const OpenWebUi: React.FC<OpenWebUiProps> = ({ currentUser }) => {
  const content = useMemo(() => {
    let content: JSX.Element | null

    if (currentUser.hasWebUiProfile) {
      const NEXT_PUBLIC_OPEN_WEBUI_PUBLIC_URL =
        process.env.NEXT_PUBLIC_OPEN_WEBUI_PUBLIC_URL

      if (!NEXT_PUBLIC_OPEN_WEBUI_PUBLIC_URL) {
        console.error('NEXT_PUBLIC_OPEN_WEBUI_PUBLIC_URL env is empty')
        content = null
      } else {
        content = (
          <p>
            <a
              href={NEXT_PUBLIC_OPEN_WEBUI_PUBLIC_URL}
              target="freecode-open-webui"
              rel="noreferrer"
            >
              Перейти в Open WebUI
            </a>
          </p>
        )
      }
    } else {
      content = <OpenWebUiConnect currentUser={currentUser} />
    }

    return content
  }, [currentUser])

  return <div>{content}</div>
}
