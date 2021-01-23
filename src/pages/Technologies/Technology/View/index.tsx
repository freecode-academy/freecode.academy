import React, { useContext, useMemo } from 'react'
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

const TechnologyView: React.FC<TechnologyViewProps> = ({
  object: technology,
}) => {
  const context = useContext(PrismaContext) as PrismaCmsContext

  const header = useMemo(() => {
    return (
      <GridTableItemStyled>
        <GridTableAttributeStyled />

        <GridTableAttributeStyled>Пользователь</GridTableAttributeStyled>

        <GridTableAttributeStyled>Уровень знания</GridTableAttributeStyled>
        <GridTableAttributeStyled>Статус</GridTableAttributeStyled>

        <GridTableAttributesContainerStyled>
          <GridTableAttributeStyled>Используется С</GridTableAttributeStyled>
          <GridTableAttributeStyled>Используется До</GridTableAttributeStyled>
        </GridTableAttributesContainerStyled>
      </GridTableItemStyled>
    )
  }, [])

  const items = technology.UserTechnologies?.map((n) => {
    return <UserTechnologyRow key={n.id} object={n} user={context.user} />
  })

  const content = useMemo(() => {
    const components = technology.components

    if (!components || !Array.isArray(components)) {
      return null
    }

    return (
      <SiteFrontEditor
        // object={undefined}
        inEditMode={false}
        itemsOnly
        // onChangeState={onChangeState}
        object={{
          name: 'Section',
          component: 'Section',
          components,
          props: {},
        }}
        className=""
      />
    )
  }, [technology.components])

  return useMemo(() => {
    return (
      <>
        <NextSeo
          title={technology.name || ''}
          description={`Технология "${technology.name}"`}
        />

        <TechnologyViewStyled>
          <Grid container spacing={8}>
            <Grid item xs>
              <Typography variant="title">{technology.name}</Typography>
            </Grid>
            <Grid item></Grid>

            <Grid item xs={12}>
              {content}
            </Grid>
          </Grid>

          <div className="technology--used-by">
            <Grid container spacing={8}>
              <Grid item xs>
                <Typography variant="subheading">Кто использует</Typography>
              </Grid>
              <Grid item>
                <ConnectUserTechnology
                  technology={technology}
                  user={context.user}
                />
              </Grid>
            </Grid>

            <TechnologyGridTableStyled>
              {header}
              {items}
            </TechnologyGridTableStyled>
          </div>
        </TechnologyViewStyled>
      </>
    )
  }, [technology, content, context.user, header, items])
}

export default TechnologyView
