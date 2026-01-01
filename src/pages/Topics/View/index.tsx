import Link from 'next/link'
import { TopicsConnectionTopicFragment } from 'src/gql/generated'
import { UserLink } from 'src/uikit/Link/User'
import { TopicLink } from 'src/uikit/Link/Topic'
import PaginationWithStyles from 'src/components/Pagination'
import { useAppContext } from 'src/AppContext'
import {
  TopicsViewStyled,
  TopicsViewListStyled,
  TopicCard,
  TopicCardTitle,
  TopicCardAuthor,
  TopicCardIntro,
} from './styles'

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
          <TopicCard key={n.id}>
            <TopicCardTitle>
              <TopicLink topic={n}>{n.name}</TopicLink>
            </TopicCardTitle>

            {n.CreatedBy && (
              <TopicCardAuthor>
                <UserLink user={n.CreatedBy} size="small" />
              </TopicCardAuthor>
            )}

            {n.longtitle && <TopicCardIntro>{n.longtitle}</TopicCardIntro>}
          </TopicCard>
        ))}
      </TopicsViewListStyled>

      <PaginationWithStyles limit={limit} page={page} total={count} />
    </TopicsViewStyled>
  )
}
