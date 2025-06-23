import { TopicsConnectionTopicFragment } from 'src/gql/generated'

type TopicsViewProps = {
  objects: TopicsConnectionTopicFragment[]
  count: number
  page: number
  limit?: number | null
}

export const TopicsView: React.FC<TopicsViewProps> = () => {
  return <>TopicsView</>
}
