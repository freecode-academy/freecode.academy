import React, { useMemo } from 'react'
// import moment from 'moment'
import Typography from 'material-ui/Typography'
import {
  GridTableAttributeStyled,
  GridTableItemStyled,
  GridTableAttributesContainerStyled,
} from 'src/components/GridTable/styles'
// import UserTechnologyLevel from 'src/pages/Technologies/Technology/View/UserTechnologyRow/UserTechnologyLevel'
// import TechnologyLink from 'src/uikit/Link/Technology'
import { UserViewTechnologiesProps } from './interfaces'
import { UserViewTechnologiesGridViewStyled } from './styles'
// import { getUserTechnologyStatusText } from 'src/helpers/getUserTechnologyStatusText'
import UserTechnologyRow from 'src/pages/Technologies/Technology/View/UserTechnologyRow'
import { TechnologyGridTableStyled } from 'src/pages/Technologies/Technology/View/styles'

const UserViewTechnologies: React.FC<UserViewTechnologiesProps> = ({
  currentUser,
  // user,
  userTechnologies,
  canEdit,
}) => {
  // const showActions = currentUser && currentUser.id === user.id ? true : false
  const showActions = canEdit

  const header = useMemo(() => {
    return (
      <GridTableItemStyled>
        {showActions ? (
          <GridTableAttributeStyled></GridTableAttributeStyled>
        ) : null}
        <GridTableAttributeStyled>Технология</GridTableAttributeStyled>

        <GridTableAttributeStyled>
          Технологический уровень
        </GridTableAttributeStyled>
        <GridTableAttributeStyled>Статус</GridTableAttributeStyled>
        <GridTableAttributeStyled>Готовность к найму</GridTableAttributeStyled>

        <GridTableAttributeStyled>Менторство</GridTableAttributeStyled>

        <GridTableAttributesContainerStyled>
          <GridTableAttributeStyled>Используется С</GridTableAttributeStyled>

          <GridTableAttributeStyled>Использовалось По</GridTableAttributeStyled>
        </GridTableAttributesContainerStyled>
      </GridTableItemStyled>
    )
  }, [showActions])

  // const items = useMemo(() => {
  //   return userTechnologies?.map((n) => {
  //     return (
  //       <GridTableItemStyled key={n.id}>
  //         {n.Technology ? (
  //           <GridTableAttributeStyled>
  //             <TechnologyLink object={n.Technology} />
  //           </GridTableAttributeStyled>
  //         ) : null}

  //         <GridTableAttributeStyled>
  //           <UserTechnologyLevel
  //             value={n.level}
  //             error={undefined}
  //             inEditMode={false}
  //             name="level"
  //           />
  //         </GridTableAttributeStyled>
  //         <GridTableAttributeStyled>
  //           {n.status ? getUserTechnologyStatusText(n.status) : null}
  //         </GridTableAttributeStyled>

  //         <GridTableAttributesContainerStyled>
  //           <GridTableAttributeStyled>
  //             {n.date_from ? moment(n.date_from).format('L') : null}
  //           </GridTableAttributeStyled>

  //           <GridTableAttributeStyled>
  //             {n.date_till ? moment(n.date_till).format('L') : null}
  //           </GridTableAttributeStyled>
  //         </GridTableAttributesContainerStyled>
  //       </GridTableItemStyled>
  //     )
  //   })
  // }, [userTechnologies])

  const items = useMemo(() => {
    return userTechnologies?.map((n) => {
      return (
        <UserTechnologyRow
          key={n.id}
          currentUser={currentUser}
          userTechnology={n}
          showActions={showActions}
          showCreateBy={false}
          showTechnology={true}
          technology={n.Technology}
        />
      )
    })
  }, [showActions, currentUser, userTechnologies])

  return (
    <>
      <Typography variant="subheading">Используемые технологии</Typography>

      <UserViewTechnologiesGridViewStyled>
        <TechnologyGridTableStyled
          showActions={showActions}
          showCreateBy={false}
          showTechnology={true}
        >
          {header}
          {items}
        </TechnologyGridTableStyled>
      </UserViewTechnologiesGridViewStyled>
    </>
  )
}

export default UserViewTechnologies
