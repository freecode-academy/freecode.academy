import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'

export const updateProjectProcessor: FieldResolver<
  'Mutation',
  'updateProjectProcessor'
> = async (_, args, ctx) => {
  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Please sign in to continue')
  }

  const where = args.where as Prisma.ProjectWhereUniqueInput

  const currentProject = await ctx.prisma.project.findUnique({
    where,
  })

  if (!currentProject) {
    throw new Error('Проект не найден')
  }

  if (currentProject.CreatedBy !== currentUserId) {
    throw new Error('Нельзя редактировать чужой проект')
  }

  const {
    name: nameProps,
    description,
    url,
    status,
    content,
    contentText,
  } = args.data

  const updateData: Prisma.ProjectUpdateArgs['data'] = {}

  if (nameProps !== undefined) {
    const name = nameProps?.trim()

    if (!name) {
      throw new Error('Не указано название проекта')
    }

    updateData.name = name
  }

  if (description !== undefined) {
    updateData.description = description
  }

  if (url !== undefined) {
    updateData.url = url
  }

  if (status !== undefined) {
    updateData.status = status
  }

  if (content !== undefined) {
    updateData.content = content
  }

  if (contentText !== undefined) {
    updateData.contentText = contentText
  }

  const project = await ctx.prisma.project.update({
    data: updateData,
    where,
  })

  return {
    success: !!project,
    message: '',
    errors: [],
    data: project,
  }
}
