import { FieldResolver } from 'nexus'
import { Prisma } from '@prisma/client'
import { getCurrentUser } from '../../../helpers/getCurrentUser'

export const createTechnology: FieldResolver<'Mutation', 'createTechnology'> =
  async (_, args, ctx) => {
    const { id: currentUserId } = getCurrentUser(ctx)

    const {
      data: { name },
    } = args

    const createData: Prisma.TechnologyCreateInput = {
      name,
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
