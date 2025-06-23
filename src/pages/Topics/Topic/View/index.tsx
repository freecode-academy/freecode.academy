import { ResourceFragment } from 'src/gql/generated'

type TopicViewProps = {
  object: ResourceFragment
  canChangeBlog?: boolean
}

export const TopicView: React.FC<TopicViewProps> = () => {
  return <>TopicView</>
}
