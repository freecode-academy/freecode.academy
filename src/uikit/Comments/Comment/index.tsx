import { ResourceFragment } from 'src/gql/generated'

type CommentProps = {
  object: ResourceFragment
  linkType?: 'target'
}

export const Comment: React.FC<CommentProps> = () => {
  return <>Comment</>
}
