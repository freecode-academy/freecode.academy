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

const TechnologyView: React.FC<TechnologyViewProps> = ({
  object: technology,
}) => {
  const context = useContext(PrismaContext) as PrismaCmsContext

  const header = useMemo(() => {
    return (
      <GridTableItemStyled>
        <GridTableAttributeStyled />

        <GridTableAttributeStyled>Пользователь</GridTableAttributeStyled>

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
  }, [technology, context.user, header, items])
}

export default TechnologyView
