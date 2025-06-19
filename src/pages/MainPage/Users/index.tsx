import React from 'react'
import { MainPageUsersStyled, MainPageUserStyled } from './styles'
import { SortOrder, useUsersConnectionQuery } from 'src/gql/generated'
import UserLink from 'src/uikit/Link/User'
import { MarkdownField } from 'src/components/MarkdownField'

export const MainPageUsers: React.FC = () => {
  const response = useUsersConnectionQuery({
    variables: {
      first: 3,
      orderBy: {
        rating: SortOrder.DESC,
      },
    },
  })

  return (
    <MainPageUsersStyled>
      {response.data?.users.map((n) => {
        return (
          <MainPageUserStyled key={n.id}>
            <UserLink user={n} />

            <div>{n.rating}</div>

            <div>
              <MarkdownField>{n.intro}</MarkdownField>
            </div>
          </MainPageUserStyled>
        )
      })}
    </MainPageUsersStyled>
  )
}
