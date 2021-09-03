import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'
import { validateTechnology } from '.'
import { getCurrentUser } from '../../../helpers/getCurrentUser'

export const updateTechnology: FieldResolver<'Mutation', 'updateTechnology'> =
  async (_, args, ctx) => {
    getCurrentUser(ctx)

    validateTechnology(args.data)

    const {
      data: {
        name,
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
