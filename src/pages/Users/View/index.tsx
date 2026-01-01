import React from 'react'
import Pagination from 'src/components/Pagination'
import { UserLink } from 'src/uikit/Link/User'
import { LevelIcon } from 'src/uikit/LevelIcon'

import { UsersViewProps } from './interfaces'
import {
  UsersViewStyled,
  UsersGrid,
  UserCard,
  UserCardUser,
  UserCardIntro,
  UserCardRating,
} from './styles'

export const UsersView: React.FC<UsersViewProps> = ({
  users,
  pagination: { limit, page, total },
}) => {
  return (
    <UsersViewStyled>
      <UsersGrid>
        {users.map((user) => (
          <UserCard key={user.id}>
            <UserCardUser>
              <UserLink user={user} />
            </UserCardUser>

            {user.intro && <UserCardIntro>{user.intro}</UserCardIntro>}

            {typeof user.rating === 'number' && user.rating > 0 && (
              <UserCardRating>
                <LevelIcon
                  variant="rating"
                  level={user.rating}
                  maxLevel={1000}
                />
                {user.rating}
              </UserCardRating>
            )}
          </UserCard>
        ))}
      </UsersGrid>
      <Pagination limit={limit} page={page} total={total} />
    </UsersViewStyled>
  )
}
