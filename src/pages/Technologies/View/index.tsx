import React from 'react'
import Link from 'next/link'
import { TechnologiesConnectionTechnologyFragment } from 'src/gql/generated'
import { UserLink } from 'src/uikit/Link/User'
import PaginationWithStyles from 'src/components/Pagination'
import {
  TechnologiesViewStyled,
  TechnologiesGrid,
  TechnologyCard,
  TechnologyCardTitle,
  TechnologyCardAuthor,
  TechnologyCardMembers,
} from './styles'

type TechnologiesViewProps = {
  objects: TechnologiesConnectionTechnologyFragment[]
  count: number | undefined
  page: number
  limit: number | undefined | null
}

export const TechnologiesView: React.FC<TechnologiesViewProps> = ({
  objects,
  count,
  page,
  limit,
}) => {
  return (
    <TechnologiesViewStyled>
      <TechnologiesGrid>
        {objects.map((n) => {
          const membersCount = n.UserTechnologies?.length || 0

          return (
            <TechnologyCard key={n.id}>
              <TechnologyCardTitle>
                <Link href={`/technologies/${n.id}`}>{n.name}</Link>
              </TechnologyCardTitle>

              {n.CreatedBy && (
                <TechnologyCardAuthor>
                  <UserLink user={n.CreatedBy} size="small" />
                </TechnologyCardAuthor>
              )}

              {membersCount > 0 && (
                <TechnologyCardMembers>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  {membersCount}
                </TechnologyCardMembers>
              )}
            </TechnologyCard>
          )
        })}
      </TechnologiesGrid>

      <PaginationWithStyles total={count ?? 0} page={page} limit={limit} />
    </TechnologiesViewStyled>
  )
}
