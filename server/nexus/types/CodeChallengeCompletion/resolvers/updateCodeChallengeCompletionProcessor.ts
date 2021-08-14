import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { NexusGenEnums } from 'server/nexus/generated/nexus'

// TODO добавить завершение таймера
export const updateCodeChallengeCompletionProcessor: FieldResolver<
  'Mutation',
  'updateCodeChallengeCompletionProcessor'
> = async (_, args, ctx) => {
  const {
    data: { content, success },
  } = args

  const where = args.where as Prisma.CodeChallengeCompletionWhereUniqueInput

  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  // id
  // Task {
  //   id
  //   status
  //   Timers (
  //     orderBy: createdAt_DESC
  //     first: 1
  //   ){
  //     id
  //     stopedAt
  //   }
  // }

  const currentCodeChallengeCompletion =
    await ctx.prisma.codeChallengeCompletion.findUnique({
      where,
      include: {
        Task_CodeChallengeCompletionToTask: {
          include: {
            Timer: {
              orderBy: {
                createdAt: 'desc',
              },
              take: 1,
            },
          },
        },
      },
    })

  if (currentCodeChallengeCompletion?.CreatedBy !== currentUserId) {
    throw new Error('Нельзя редактировать чужой объект')
  }

  const updateData: Prisma.CodeChallengeCompletionUpdateInput = {
    content,
    success,
  }

  if (success) {
    const task =
      currentCodeChallengeCompletion.Task_CodeChallengeCompletionToTask

    if (task) {
      const [timer] = task.Timer || []

      let Timers: Prisma.TimerUpdateManyWithoutTask_TaskToTimerInput | undefined

      if (timer && !timer.stopedAt) {
        Timers = {
          update: {
            data: {
              stopedAt: new Date(),
            },
            where: {
              id: timer.id,
            },
          },
        }
      }

      const completeStatus: NexusGenEnums['TaskStatus'] = 'Completed'

      const Task: Prisma.TaskUpdateOneWithoutCodeChallengeCompletionInput = {
        update: {
          status: completeStatus,
          Timer: Timers,
        },
      }

      // Object.assign(data, {
      //   Task,
      // });

      updateData.Task_CodeChallengeCompletionToTask = Task
    }
  }

  const codeChallengeCompletion =
    await ctx.prisma.codeChallengeCompletion.update({
      data: updateData,
      where,
    })

  return {
    success: !!codeChallengeCompletion,
    message: '',
    errors: [],
    data: codeChallengeCompletion,
  }
}
