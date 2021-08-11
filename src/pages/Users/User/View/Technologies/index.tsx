import React, { useMemo } from 'react'
import moment from 'moment'
import Typography from 'material-ui/Typography'
import {
  GridTableAttributeStyled,
  GridTableItemStyled,
  GridTableAttributesContainerStyled,
} from 'src/components/GridTable/styles'
import UserTechnologyLevel from 'src/pages/Technologies/Technology/View/UserTechnologyRow/UserTechnologyLevel'
import TechnologyLink from 'src/uikit/Link/Technology'
import { UserViewTechnologiesProps } from './interfaces'
import { UserViewTechnologiesGridViewStyled } from './styles'

const UserViewTechnologies: React.FC<UserViewTechnologiesProps> = ({
  objects,
}) => {
  const header = useMemo(() => {
    return (
      <GridTableItemStyled>
        <GridTableAttributeStyled>Технология</GridTableAttributeStyled>

        <GridTableAttributeStyled>Уровень знания</GridTableAttributeStyled>
        <GridTableAttributeStyled>Статус</GridTableAttributeStyled>

        <GridTableAttributesContainerStyled>
          <GridTableAttributeStyled>Используется С</GridTableAttributeStyled>

          <GridTableAttributeStyled>Использовалось По</GridTableAttributeStyled>
        </GridTableAttributesContainerStyled>
      </GridTableItemStyled>
    )
  }, [])

  const items = useMemo(() => {
    return objects?.map((n) => {
      return (
        <GridTableItemStyled key={n.id}>
          {n.Technology ? (
            <GridTableAttributeStyled>
              <TechnologyLink object={n.Technology} />
            </GridTableAttributeStyled>
          ) : null}

          <GridTableAttributeStyled>
            <UserTechnologyLevel
              value={n.level}
              error={undefined}
              inEditMode={false}
            />
          </GridTableAttributeStyled>
          <GridTableAttributeStyled>{n.status}</GridTableAttributeStyled>

          <GridTableAttributesContainerStyled>
            <GridTableAttributeStyled>
              {n.date_from ? moment(n.date_from).format('L') : null}
            </GridTableAttributeStyled>

            <GridTableAttributeStyled>
              {n.date_till ? moment(n.date_till).format('L') : null}
            </GridTableAttributeStyled>
          </GridTableAttributesContainerStyled>
        </GridTableItemStyled>
      )
    })
  }, [objects])

  return (
    <>
      <Typography variant="subheading">Используемые технологии</Typography>

      <UserViewTechnologiesGridViewStyled>
        {header}
        {items}
      </UserViewTechnologiesGridViewStyled>
    </>
  )
}

export default UserViewTechnologies
