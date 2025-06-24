/* eslint-disable no-console */
import {
  ResourceFragment,
  TopicsConnectionTopicFragment,
} from 'src/gql/generated'
import { TopicViewStyled, TopicViewTitleStyled } from './styles'
import { TopicLink } from 'src/uikit/Link/Topic'
import { Editor } from 'src/components/SiteFrontEditor'
import { TopicComments } from './Comments'

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

  console.log('TopicView topic', topic)

  const content = 'content' in topic ? topic.content : undefined
  const contentText = 'contentText' in topic ? topic.contentText : undefined

  console.log('TopicView content', content)
  console.log('TopicView contentText', contentText)

  let title: JSX.Element | string | null | undefined

  switch (variant) {
    case 'list':
      title = name

      break
    case 'full':
      title = name

      break
  }

  return (
    <TopicViewStyled>
      {title && (
        <TopicLink topic={topic}>
          <TopicViewTitleStyled as={variant === 'full' ? 'h1' : 'h2'}>
            {title}
          </TopicViewTitleStyled>
        </TopicLink>
      )}

      {variant === 'full' && (
        <Editor itemsOnly object={topic} value={content} />
      )}

      {variant === 'full' && <TopicComments topic={topic} />}
    </TopicViewStyled>
  )
}
