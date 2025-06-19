import React from 'react'
// import { ObjectsListView, styles } from 'src/components/view/List'

// import withStyles from 'material-ui/styles/withStyles'
// import { TechnologiesViewProps } from './interfaces'
// import { ColumnConfig } from 'apollo-cms/dist/DataView/List/Table'
import { TechnologiesConnectionTechnologyFragment } from 'src/gql/generated'
import UserLink from 'src/uikit/Link/User'
import Grid from 'src/uikit/Grid'
import TechnologyLink from 'src/uikit/Link/Technology'
import styled from 'styled-components'
import {
  GridCell,
  GridCellHeader,
  GridRow,
  GridTable,
} from 'src/components/Grid/styles'
import PaginationWithStyles from 'src/components/Pagination'

const TechnologiesViewMembersStyled = styled(GridCell)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const TechnologiesViewGridStyled = styled(GridTable)`
  grid-template-columns: min-content max-content auto;
`

const TechnologiesViewStyled = styled.div``

type TechnologiesViewProps = {
  objects: TechnologiesConnectionTechnologyFragment[]
  // loading: boolean
  count: number | undefined
  page: number
  limit: number | undefined | null
}

export const TechnologiesView: React.FC<TechnologiesViewProps> = ({
  objects,
  count,
  // loading,
  page,
  limit,
}) => {
  return (
    <TechnologiesViewStyled>
      <TechnologiesViewGridStyled>
        <GridRow>
          <GridCellHeader>Технология</GridCellHeader>
          <GridCellHeader>Кем добавлена</GridCellHeader>
          <GridCellHeader>Кто использует</GridCellHeader>
        </GridRow>

        {objects.map((n) => {
          const items =
            n.UserTechnologies?.map((nn) => (
              <Grid key={nn.id} item>
                {nn.CreatedBy ? <UserLink user={nn.CreatedBy} /> : null}
              </Grid>
            )) ?? []

          return (
            <GridRow key={n.id}>
              <GridCell>
                <TechnologyLink object={n} />
              </GridCell>
              <GridCell>
                {n.CreatedBy && <UserLink user={n.CreatedBy} />}
              </GridCell>
              <TechnologiesViewMembersStyled>
                {' '}
                {items}
              </TechnologiesViewMembersStyled>
            </GridRow>
          )
        })}
      </TechnologiesViewGridStyled>

      <PaginationWithStyles total={count ?? 0} page={page} limit={limit} />
    </TechnologiesViewStyled>
  )
}
