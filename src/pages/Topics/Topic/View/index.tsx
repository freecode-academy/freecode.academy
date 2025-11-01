import {
  ResourceFragment,
  TopicsConnectionTopicFragment,
} from 'src/gql/generated'
import { TopicViewStyled, TopicViewTitleStyled } from './styles'
import { TopicLink } from 'src/uikit/Link/Topic'
import { Editor } from 'src/components/SiteFrontEditor'
import { TopicComments } from './Comments'
import { useAppContext } from 'src/AppContext'
import { useBoolean } from 'src/hooks/useBoolean'
import { TopicEditForm } from '../Form'
import { Button } from 'src/components/Button'

type TopicViewProps = {
  canChangeBlog?: boolean
} & (
  | {
      variant: 'list'
      topic: TopicsConnectionTopicFragment
    }
  | {
      variant: 'full'
      topic: ResourceFragment
    }
)

export const TopicView: React.FC<TopicViewProps> = ({ topic, variant }) => {
  const { name } = topic

  const content = 'content' in topic ? topic.content : undefined

  let title: JSX.Element | string | null | undefined

  switch (variant) {
    case 'list':
      title = name

      break
    case 'full':
      title = name

      break
  }

  const { user } = useAppContext()

  const [inEditMode, startEditing, stopEditing] = useBoolean()

  let viewContent: React.ReactNode

  if (inEditMode) {
    viewContent = <TopicEditForm topic={topic} cancelHandler={stopEditing} />
  } else {
    viewContent = (
      <>
        <div>
          {title && (
            <TopicLink topic={topic}>
              <TopicViewTitleStyled as={variant === 'full' ? 'h1' : 'h2'}>
                {title}
              </TopicViewTitleStyled>
            </TopicLink>
          )}

          {user?.sudo && <Button onClick={startEditing}>Редактировать</Button>}
        </div>

        {variant === 'full' && (
          <Editor itemsOnly object={topic} value={content} />
        )}

        {variant === 'full' && <TopicComments topic={topic} />}
      </>
    )
  }

  return <TopicViewStyled>{viewContent}</TopicViewStyled>
}
