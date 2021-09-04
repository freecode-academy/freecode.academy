import { FieldResolver } from 'nexus'
import { Prisma } from '@prisma/client'
import { getCurrentUser } from '../../../helpers/getCurrentUser'
import { NexusGenInputs } from 'server/nexus/generated/nexus'

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
