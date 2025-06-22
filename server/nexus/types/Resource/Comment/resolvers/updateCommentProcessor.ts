import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { updateResource } from '../../resolvers/updateResource'

export const updateCommentProcessor: FieldResolver<
  'Mutation',
  'updateCommentProcessor'
> = async (_, args, ctx) => {
  const {
    data: { content, components },
  } = args

  const where = args.where as Prisma.UserWhereUniqueInput

  const resource = await updateResource(
    {
      data: {
        content,
        components,
      },
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
