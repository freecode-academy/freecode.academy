import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'
import { NexusGenInputs } from 'server/nexus/generated/nexus'
// import { validateTechnology } from './validateTechnology'
import { getCurrentUser } from '../../../helpers/getCurrentUser'

const validateTechnology = (
  data:
    | NexusGenInputs['TechnologyCreateInput']
    | NexusGenInputs['TechnologyUpdateInput']
) => {
  if (data.name !== undefined) {
    if (!data.name) {
      throw new Error('Не заполнено название')
    }
  }

  return data
}

export const updateTechnology: FieldResolver<
  'Mutation',
  'updateTechnology'
> = async (_, args, ctx) => {
  getCurrentUser(ctx)

  validateTechnology(args.data)

  const {
    data: {
      name,
      description,
      site_url,
      components,
      level1hours,
      level2hours,
      level3hours,
      level4hours,
      level5hours,
    },
  } = args

  const where = args.where as Prisma.TechnologyWhereUniqueInput

  const updateData: Prisma.TechnologyUpdateInput = {
    name: name === null ? undefined : name,
    description,
    site_url,
    components: components as Prisma.TechnologyUpdateInput['components'],
    level1hours,
    level2hours,
    level3hours,
    level4hours,
    level5hours,
  }

  return ctx.prisma.technology.update({
    data: updateData,
    where,
  })
}
