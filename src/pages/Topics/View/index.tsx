import Link from 'next/link'
import { TopicsConnectionTopicFragment } from 'src/gql/generated'
import { TopicCard } from 'src/components/TopicCard'
import PaginationWithStyles from 'src/components/Pagination'
import { useAppContext } from 'src/AppContext'
import { TopicsViewStyled, TopicsViewListStyled } from './styles'

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
          <TopicCard key={n.id} topic={n} />
        ))}
      </TopicsViewListStyled>

      <PaginationWithStyles limit={limit} page={page} total={count} />
    </TopicsViewStyled>
  )
}
