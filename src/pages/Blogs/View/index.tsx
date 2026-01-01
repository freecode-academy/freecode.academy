import React from 'react'
import { BlogsConnectionResourceFragment } from 'src/gql/generated'
import { UserLink } from 'src/uikit/Link/User'
import BlogLink from 'src/uikit/Link/Blog'
import styled from 'styled-components'
import {
  GridCell,
  GridCellHeader,
  GridRow,
  GridTable,
} from 'src/components/Grid/styles'
import PaginationWithStyles from 'src/components/Pagination'

const BlogsViewGridStyled = styled(GridTable)`
  grid-template-columns: auto max-content;
`

const BlogsViewStyled = styled.div``

type BlogsViewProps = {
  objects: BlogsConnectionResourceFragment[]
  // loading: boolean
  count: number | undefined
  page: number
  limit: number | undefined | null
}

export const BlogsView: React.FC<BlogsViewProps> = ({
  objects,
  count,
  // loading,
  page,
  limit,
}) => {
  return (
    <BlogsViewStyled>
      <BlogsViewGridStyled>
        <GridRow>
          <GridCellHeader>Название</GridCellHeader>
          <GridCellHeader>Автор</GridCellHeader>
        </GridRow>

        {objects.map((n) => {
          return (
            <GridRow key={n.id}>
              <GridCell>
                <BlogLink object={n} />
              </GridCell>
              <GridCell>
                {n.CreatedBy && <UserLink user={n.CreatedBy} />}{' '}
              </GridCell>
            </GridRow>
          )
        })}
      </BlogsViewGridStyled>

      <PaginationWithStyles total={count ?? 0} page={page} limit={limit} />
    </BlogsViewStyled>
  )
}
