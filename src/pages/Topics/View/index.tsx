import { TopicsConnectionTopicFragment } from 'src/gql/generated'
import { TopicsViewListStyled, TopicsViewStyled } from './styles'
import PaginationWithStyles from 'src/components/Pagination'
import { TopicView } from '../Topic/View'

type TopicsViewProps = {
  objects: TopicsConnectionTopicFragment[]
  count: number
  page: number
  limit?: number | null
}

export const TopicsView: React.FC<TopicsViewProps> = ({
  count,
  objects,
  page,
  limit,
}) => {
  return (
    <TopicsViewStyled>
      <TopicsViewListStyled>
        {objects.map((n) => (
          <TopicView key={n.id} topic={n} variant="list" />
        ))}
      </TopicsViewListStyled>

      <PaginationWithStyles limit={limit} page={page} total={count} />
    </TopicsViewStyled>
  )
}
