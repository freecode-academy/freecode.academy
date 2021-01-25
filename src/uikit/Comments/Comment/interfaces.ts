import { EditableObjectProps } from 'apollo-cms/dist/DataView/Object/Editable'
import {
  CommentCreateInput,
  CommentUpdateInput,
  Maybe,
  Resource,
  TaskNoNestingFragment,
  User,
} from 'src/modules/gql/generated'
import {
  UikitCommentLinkObject,
  UikitCommentLinkProps,
} from 'src/uikit/Link/Comment/interfaces'

export interface UikitCommentObjectUser {
  __typename?: User['__typename']
  id?: User['id']
}

export interface UikitCommentObject extends UikitCommentLinkObject {
  id: Resource['id'] | undefined

  uri: Resource['uri'] | undefined

  // content: RawDraftContentState | null | undefined
  content?: Resource['content']
  components?: Resource['components']

  CreatedBy?: UikitCommentObjectUser

  Task?: Maybe<TaskNoNestingFragment>
}

export interface UikitCommentProps extends EditableObjectProps {
  object: UikitCommentObject | null | undefined

  linkType?: UikitCommentLinkProps['linkType']

  className?: string

  _dirty?: CommentCreateInput | CommentUpdateInput | null
}
