import { Editor } from 'src/components/SiteFrontEditor'
import { ResourceFragment } from 'src/gql/generated'
import { CommentStyled } from './styles'
import UserLink from 'src/uikit/Link/User'
import { TopicLink } from 'src/uikit/Link/Topic'
import { TaskLink } from 'src/uikit/Link/Task'

type CommentProps = {
  object: ResourceFragment
  linkType?: 'target'
  variant: 'list' | 'full'
}

export const Comment: React.FC<CommentProps> = ({
  object: comment,
  variant,
}) => {
  const { CreatedBy, Task, Topic } = comment

  return (
    <CommentStyled>
      {CreatedBy && <UserLink user={CreatedBy} />}

      <Editor object={comment} />

      {variant === 'list' && (
        <>
          {Topic && (
            <div>
              Топик: <TopicLink topic={Topic} />
            </div>
          )}

          {Task && (
            <div>
              Задача: <TaskLink object={Task} />
            </div>
          )}
        </>
      )}
    </CommentStyled>
  )
}
