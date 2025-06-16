import React, { useMemo, useState, useCallback } from 'react'
import { ButtonStyled } from '../styles'
import { ToolPanelCompletion } from './Completion'
import { ToolPanelCompletionsProps } from './interfaces'
import { ToolPanelCompletionsStyled } from './styles'

/**
 * Список чужиг готовых решений, чтобы можно было посмотреть и выбрать для себя
 */
export const ToolPanelCompletions: React.FC<ToolPanelCompletionsProps> = ({
  codeChallenge,
}) => {
  const [opened, openedSetter] = useState(false)

  const toggleOpened = useCallback(() => {
    openedSetter(!opened)
  }, [opened])

  const items = useMemo<JSX.Element[]>(() => {
    return (
      codeChallenge.CodeChallengeCompletionsSuccess?.map((n) => {
        return <ToolPanelCompletion key={n.id} codeChallengeCompletion={n} />
      }) || []
    )
  }, [codeChallenge.CodeChallengeCompletionsSuccess])

  return useMemo(() => {
    if (!items.length) {
      return null
    }

    return (
      <ToolPanelCompletionsStyled>
        <ButtonStyled onClick={toggleOpened}>Чужие решения</ButtonStyled>

        {opened ? (
          <div>
            <p>
              Вы можете выбрать любое из готовых решений других участников
              сообщества.
            </p>
            <p>
              Просто кликните по нему, и код будет подставлен в решение заместо
              текущего.
            </p>
            <p>
              Это очень удобно, если решение сложное и вы хотите посмотреть и
              проанализировать чужие решения.
            </p>
            <p>В любой момент можно сбросить код решения до исходного.</p>

            {items}
          </div>
        ) : null}
      </ToolPanelCompletionsStyled>
    )
  }, [items, opened, toggleOpened])
}
