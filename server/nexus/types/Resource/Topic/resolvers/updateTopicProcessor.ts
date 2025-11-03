import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { updateResource } from '../../resolvers/updateResource'

export const updateTopicProcessor: FieldResolver<
  'Mutation',
  'updateTopicProcessor'
> = async (_, args, ctx) => {
  const {
    data: { name, contentV2, blogID, uri },
  } = args

  const where = args.where as Prisma.ResourceWhereUniqueInput

  const updateData: Prisma.ResourceUpdateInput = {
    name,
    contentV2: contentV2 ?? undefined,
    uri: uri ?? undefined,
  }

  if (blogID) {
    updateData.Resource_ResourceToResource_Blog = {
      connect: {
        id: blogID,
      },
    }
  }

  const resource = await updateResource(
    {
      data: updateData,
      where,
    },
    ctx
  )

  return {
    success: !!resource,
    message: '',
    errors: [],
    data: resource,
  }
}
