import React, { useMemo } from 'react'
import {
  GridTableAttributesContainerStyled,
  GridTableAttributeStyled,
  GridTableItemStyled,
} from 'src/components/GridTable/styles'
import Pagination from 'src/components/Pagination'
import { UsersFilters } from './Filters'
import { UsersViewProps } from './interfaces'
import { UsersViewTableStyled } from './styles'
import { UsersViewUser } from './User'

export const UsersView: React.FC<UsersViewProps> = ({
  users,
  pagination: { limit, page, total },
}) => {
  const header = useMemo(() => {
    return (
      <GridTableItemStyled>
        {/* <GridTableAttributeStyled className="buttons" /> */}
        <GridTableAttributeStyled className="status">
          Пользователь
        </GridTableAttributeStyled>
        <GridTableAttributeStyled>
          Технологический уровень
        </GridTableAttributeStyled>
        <GridTableAttributeStyled>Создал проекты</GridTableAttributeStyled>
        <GridTableAttributeStyled>
          Участвует в проектах
        </GridTableAttributeStyled>
        <GridTableAttributesContainerStyled>
          <GridTableAttributeStyled>Дата регистрации</GridTableAttributeStyled>
          <GridTableAttributeStyled>Дата обновления</GridTableAttributeStyled>
        </GridTableAttributesContainerStyled>
      </GridTableItemStyled>
    )
  }, [])

  const items = users.map((n) => {
    return <UsersViewUser key={n.id} user={n} />
  })

  return (
    <>
      <UsersFilters />
      <UsersViewTableStyled>
        {header}
        {items}
      </UsersViewTableStyled>
      <Pagination limit={limit} page={page} total={total} />
    </>
  )
}
