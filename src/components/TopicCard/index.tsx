import React from 'react'
import { TopicsConnectionTopicFragment } from 'src/gql/generated'
import { UserLink } from 'src/uikit/Link/User'
import { TopicLink } from 'src/uikit/Link/Topic'
import { BlogLink } from 'src/uikit/Link/Blog'
import { Markdown } from 'src/components/Markdown'
import { FormattedDate } from 'src/ui-kit/format/FormattedDate'
import {
  TopicCardStyled,
  TopicCardTitle,
  TopicCardAuthor,
  TopicCardIntro,
  TopicCardLongtitle,
  TopicCardBlog,
  TopicCardContent,
  TopicCardDate,
} from './styles'

type TopicCardProps = {
  topic: TopicsConnectionTopicFragment
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  const { name, longtitle, intro, createdAt, CreatedBy, Blog } = topic

  return (
    <TopicCardStyled>
      <TopicCardTitle>
        <TopicLink topic={topic}>{name}</TopicLink>
      </TopicCardTitle>

      <TopicCardBlog>{Blog && <BlogLink object={Blog} />}</TopicCardBlog>

      <TopicCardContent>
        {intro ? (
          <TopicCardIntro>
            <Markdown>{intro}</Markdown>
          </TopicCardIntro>
        ) : (
          longtitle && <TopicCardLongtitle>{longtitle}</TopicCardLongtitle>
        )}
      </TopicCardContent>

      <TopicCardAuthor>
        {CreatedBy && <UserLink user={CreatedBy} size="small" />}
      </TopicCardAuthor>

      <TopicCardDate>
        <FormattedDate value={createdAt} />
      </TopicCardDate>
    </TopicCardStyled>
  )
}
