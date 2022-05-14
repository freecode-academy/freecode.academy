import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import {
  GridTableAttributesContainerStyled,
  GridTableAttributeStyled,
  GridTableItemStyled,
} from 'src/components/GridTable/styles'
import Pagination from 'src/components/Pagination'
import { UsersViewProps } from './interfaces'
import { UsersViewTableStyled } from './styles'
import { UsersViewUser } from './User'

const UsersFilters = dynamic(import('./Filters'), {
  ssr: false,
})

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
