import { EditableObjectProps } from 'apollo-cms/dist/DataView/Object/Editable'
import {
  CommentCreateInput,
  CommentsConnectionCommentFragment,
  CommentUpdateInput,
  // Maybe,
  // Resource,
  // ResourceFragment,
  ResourceNoNestingFragment,
  // ResourceNoNestingFragment,
  // TaskNoNestingFragment,
  User,
  UserNoNestingFragment,
} from 'src/gql/generated'
import {
  // UikitCommentLinkObject,
  UikitCommentLinkProps,
} from 'src/uikit/Link/Comment/interfaces'

export interface UikitCommentObjectUser {
  __typename?: User['__typename']
  id?: User['id']
}

// export interface UikitCommentObject extends UikitCommentLinkObject {
//   id: Resource['id'] | undefined

//   uri: Resource['uri'] | undefined

//   // content: RawDraftContentState | null | undefined
//   resource: Resource
//   content?: Resource['content']
//   components?: Resource['components']

//   CreatedBy?: UikitCommentObjectUser | null

//   Task?: Maybe<TaskNoNestingFragment>
// }

export interface UikitCommentProps extends EditableObjectProps {
  // object: UikitCommentObject | null | undefined
  object:
    | ((CommentsConnectionCommentFragment | ResourceNoNestingFragment) & {
        CreatedBy?: UserNoNestingFragment | null
      })
    | null
    | undefined

  linkType?: UikitCommentLinkProps['linkType']

  className?: string

  _dirty?: CommentCreateInput | CommentUpdateInput | null
}
