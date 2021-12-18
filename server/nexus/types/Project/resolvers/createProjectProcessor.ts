import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'

export const createProjectProcessor: FieldResolver<
  'Mutation',
  'createProjectProcessor'
> = async (_, args, ctx) => {
  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  const {
    data: { name, url },
  } = args

  const createData: Prisma.ProjectCreateInput = {
    name,
    url,
    User_ProjectToUser: {
      connect: {
        id: currentUserId,
      },
    },
  }

  const project = await ctx.prisma.project.create({
    data: createData,
  })

  return {
    success: !!project,
    message: '',
    errors: [],
    data: project,
  }
}
