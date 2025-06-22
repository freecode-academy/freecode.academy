import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { updateResource } from '../../resolvers/updateResource'

export const updateTopicProcessor: FieldResolver<
  'Mutation',
  'updateTopicProcessor'
> = async (_, args, ctx) => {
  const {
    data: { components, content, longtitle, name },
  } = args

  const where = args.where as Prisma.ResourceWhereUniqueInput

  const updateData: Prisma.ResourceUpdateInput = {
    components,
    content,
    longtitle,
    name,
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
