import { FieldResolver } from 'nexus'
import { Prisma } from '@prisma/client'
import { getCurrentUser } from '../../../helpers/getCurrentUser'
import { validateTechnology } from '.'

export const createTechnology: FieldResolver<'Mutation', 'createTechnology'> =
  async (_, args, ctx) => {
    const { id: currentUserId } = getCurrentUser(ctx)

    validateTechnology(args.data)

    const {
      data: { name, description },
    } = args

    const createData: Prisma.TechnologyCreateInput = {
      name,
      description,
      User: {
        connect: {
          id: currentUserId,
        },
      },
    }

    return ctx.prisma.technology.create({
      data: createData,
    })
  }
