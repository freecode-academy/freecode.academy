import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useMemo } from 'react'
import Context from 'src/pages/learn/CodeChallenge/Context'
import { UikitUserLink } from 'src/uikit/Link/User'
import { ToolPanelCompletionProps } from './interfaces'
import { ToolPanelCompletionStyled } from './styles'

export const ToolPanelCompletion: React.FC<ToolPanelCompletionProps> = ({
  codeChallengeCompletion,
}) => {
  const context = useContext(Context)

  const [wrapper, wrapperSetter] = useState<HTMLButtonElement | null>(null)

  const ref = useCallback((el: HTMLButtonElement) => {
    wrapperSetter(el)
  }, [])

  useEffect(() => {
    if (wrapper) {
      const onClick = (event: MouseEvent) => {
        /**
         * Обрываем событие, чтобы по ссылкам переход не выполнялся
         */
        event.preventDefault()
        event.stopPropagation()

        if (context) {
          const challengeData = context.challengeData

          const file = challengeData.file

          context.setChallengeData({
            ...challengeData,
            file: {
              ...file,
              contents: codeChallengeCompletion.content || '',
            },
          })
        }
      }

      wrapper.addEventListener('click', onClick, true)

      return () => {
        wrapper.removeEventListener('click', onClick)
      }
    }
  }, [codeChallengeCompletion, context, wrapper])

  return useMemo(() => {
    return (
      <ToolPanelCompletionStyled>
        <button ref={ref}>
          <UikitUserLink user={codeChallengeCompletion.CreatedBy} />
        </button>
      </ToolPanelCompletionStyled>
    )
  }, [codeChallengeCompletion.CreatedBy, ref])
}
