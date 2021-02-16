import React from 'react'
import Typography from 'material-ui/Typography'
import CodeChallengeBlocksPageBlockView from './CodeChallengeBlocksPageBlockView'
import { CodeChallengeBlocksViewProps } from './interfaces'
import { CodeChallengeBlocksPageStyled } from './styles'

const CodeChallengeBlocksPageView: React.FC<CodeChallengeBlocksViewProps> = ({
  objects,
}) => {
  return (
    <CodeChallengeBlocksPageStyled>
      <Typography variant="title" paragraph>
        Тестовые задания по HTML, CSS, Javascript
      </Typography>

      <Typography paragraph>
        Здесь вы можете пройти различные практические задания.
      </Typography>

      <Typography paragraph>
        Внимание: к сожалению, не все разделы работают, в некоторых могут быть
        ошибки. Если что-то не так, пишите впям в самой задаче во вкладке
        Обсудить.
      </Typography>

      {objects.map((n) => {
        return <CodeChallengeBlocksPageBlockView key={n.id} object={n} />
      })}
    </CodeChallengeBlocksPageStyled>
  )
}

export default CodeChallengeBlocksPageView
