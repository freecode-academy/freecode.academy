import { TopicsConnectionTopicFragment } from 'src/gql/generated'
import { TopicsViewListStyled, TopicsViewStyled } from './styles'
import PaginationWithStyles from 'src/components/Pagination'
import { TopicView } from '../Topic/View'
import { useAppContext } from 'src/AppContext'
import Link from 'next/link'

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
  const { user } = useAppContext()

  return (
    <TopicsViewStyled>
      {user?.sudo && (
        <div>
          <Link href="/topics/create">Create topic</Link>
        </div>
      )}

      <TopicsViewListStyled>
        {objects.map((n) => (
          <TopicView key={n.id} topic={n} variant="list" />
        ))}
      </TopicsViewListStyled>

      <PaginationWithStyles limit={limit} page={page} total={count} />
    </TopicsViewStyled>
  )
}
