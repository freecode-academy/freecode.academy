import React, { useCallback, useContext, useMemo, useState } from 'react'
import ReactDecliner from 'react-decliner'
import { TechnologyViewProps } from './interfaces'
import { TechnologyGridTableStyled, TechnologyViewStyled } from './styles'
// import Link from 'next/link'
import Typography from 'material-ui/Typography'
import Grid from 'src/uikit/Grid'
import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'
import ConnectUserTechnology from './ConnectUserTechnology'
import { NextSeo } from 'next-seo'
import {
  GridTableAttributeStyled,
  GridTableItemStyled,
  GridTableAttributesContainerStyled,
} from 'src/components/GridTable/styles'
import UserTechnologyRow from './UserTechnologyRow'
import SiteFrontEditor from 'src/components/SiteFrontEditor'
import Link from 'src/uikit/Link'
import { useCurrentUser } from 'src/hooks/useCurrentUser'
import Button from 'src/components/ui/Button'
import { TechnologyUpdateForm } from './UpdateForm'

const TechnologyView: React.FC<TechnologyViewProps> = ({ technology }) => {
  const context = useContext(PrismaContext) as PrismaCmsContext

  const currentUser = useCurrentUser()

  const showActions = currentUser ? true : false

  const header = useMemo(() => {
    return (
      <GridTableItemStyled>
        {showActions ? <GridTableAttributeStyled /> : null}

        <GridTableAttributeStyled>Пользователь</GridTableAttributeStyled>

        <GridTableAttributeStyled>Уровень</GridTableAttributeStyled>
        <GridTableAttributeStyled>Статус</GridTableAttributeStyled>
        <GridTableAttributeStyled>Готовность к найму</GridTableAttributeStyled>
        <GridTableAttributeStyled>Менторство</GridTableAttributeStyled>

        <GridTableAttributesContainerStyled>
          <GridTableAttributeStyled>Используется С</GridTableAttributeStyled>
          <GridTableAttributeStyled>Используется До</GridTableAttributeStyled>
        </GridTableAttributesContainerStyled>
      </GridTableItemStyled>
    )
  }, [showActions])

  const items = technology.UserTechnologies?.map((n) => {
    return (
      <UserTechnologyRow
        key={n.id}
        userTechnology={n}
        currentUser={context.user}
        showCreateBy={true}
        showTechnology={false}
        showActions={showActions}
      />
    )
  })

  const content = useMemo(() => {
    const components = technology.components

    if (!components) {
      return null
    }

    return (
      <SiteFrontEditor
        // object={undefined}
        inEditMode={false}
        itemsOnly
        // onChangeState={onChangeState}
        object={components}
        className=""
      />
    )
  }, [technology.components])

  const canEdit = useMemo(() => {
    return currentUser?.sudo === true
  }, [currentUser?.sudo])

  const [editFormOpened, editFormOpenedSetter] = useState(false)

  const editFormOpenedToggle = useCallback(() => {
    editFormOpenedSetter(!editFormOpened)
  }, [editFormOpened])

  const editButton = useMemo(() => {
    if (!canEdit) {
      return null
    }

    return (
      <Button size="small" onClick={editFormOpenedToggle}>
        {editFormOpened ? 'Закрыть' : 'Редактировать'}
      </Button>
    )
  }, [canEdit, editFormOpened, editFormOpenedToggle])

  /**
   * Примерное время освоения технологии
   */
  const learnTimes = useMemo(() => {
    const items: JSX.Element[] = []

    // if(technology.level1hours)

    const levels: number[] = [1, 2, 3, 4, 5]

    levels.forEach((level) => {
      const time = technology[
        `level${level}hours` as keyof typeof technology
      ] as number | null

      if (time) {
        items.push(
          <Grid key={level} item xs={12}>
            Уровень {level}: {time}{' '}
            <ReactDecliner num={time} one="час" two="часа" many="часов" />
          </Grid>
        )
      }
    })

    if (items.length) {
      return (
        <Grid container spacing={8}>
          <Grid item xs>
            <Typography variant="subheading">
              Примерно время освоения
            </Typography>
          </Grid>
          <Grid item xs={12}></Grid>

          {items}
        </Grid>
      )
    }
  }, [technology])

  return useMemo(() => {
    return (
      <>
        <NextSeo
          title={technology.name || ''}
          description={
            technology.description || `Технология "${technology.name}"`
          }
        />

        {editButton}

        <TechnologyViewStyled>
          {editFormOpened ? (
            <TechnologyUpdateForm
              technology={technology}
              editFormOpenedSetter={editFormOpenedSetter}
            />
          ) : (
            <Grid container spacing={8}>
              <Grid item xs>
                <Typography variant="title">{technology.name}</Typography>
                {technology.description ? (
                  <Typography variant="caption">{technology.name}</Typography>
                ) : null}
              </Grid>
              <Grid item></Grid>

              {technology.site_url ? (
                <Grid item xs={12}>
                  <Link href={technology.site_url} target="_blank">
                    {technology.site_url}
                  </Link>
                </Grid>
              ) : null}

              <Grid item xs={12}>
                {content}
              </Grid>
            </Grid>
          )}

          {learnTimes}

          <div className="technology--used-by">
            <Grid container spacing={8}>
              <Grid item xs>
                <Typography variant="subheading">Кто использует</Typography>
              </Grid>
              <Grid item>
                <ConnectUserTechnology
                  technology={technology}
                  currentUser={context.user}
                />
              </Grid>
            </Grid>

            <TechnologyGridTableStyled
              showActions={showActions}
              showCreateBy={true}
              showTechnology={false}
            >
              {header}
              {items}
            </TechnologyGridTableStyled>
          </div>
        </TechnologyViewStyled>
      </>
    )
  }, [
    technology,
    editButton,
    editFormOpened,
    content,
    learnTimes,
    context.user,
    showActions,
    header,
    items,
  ])
}

export default TechnologyView
