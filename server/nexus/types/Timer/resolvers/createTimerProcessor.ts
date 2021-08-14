import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { NexusGenEnums } from 'server/nexus/generated/nexus'

export const createTimerProcessor: FieldResolver<
  'Mutation',
  'createTimerProcessor'
> = async (_, args, ctx) => {
  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  const { stopedAt, Task } = args.data

  const createData: Prisma.TimerCreateInput = {
    stopedAt,
    User: {
      connect: {
        id: currentUserId,
      },
    },
  }

  if (Task?.connect) {
    const taskConnect = Task.connect as Prisma.TaskWhereUniqueInput

    createData.Task_TaskToTimer = {
      connect: taskConnect,
    }
  }

  /**
   * Получаем и завершаем запущенные таски, если имеются
   */
  const activeTimers = await ctx.prisma.timer.findMany({
    where: {
      CreatedBy: currentUserId,
      stopedAt: null,
    },
  })

  /**
   * Останавливаем все активные счетчики
   */
  if (activeTimers && activeTimers.length) {
    const ids: string[] = activeTimers.map(({ id }) => {
      return id
    })

    if (ids.length) {
      const updateTimersArgs: Prisma.TimerUpdateManyArgs = {
        data: {
          stopedAt: new Date(),
        },
        where: {
          id: {
            in: ids,
          },
        },
      }

      await ctx.prisma.timer.updateMany(updateTimersArgs)
    }
  }

  // if(Task){
  //   Object.assign(Task, {

  //   });
  // }

  const timer = await ctx.prisma.timer.create({
    data: createData,
    include: {
      Task_TaskToTimer: true,
    },
  })

  // const {
  //   id: timerId,
  // } = result || {}

  if (timer) {
    // const Timer = await this.query("timer", {
    //   where: {
    //     id: timerId,
    //   },
    // }, `{
    //   id
    //   Task{
    //     id
    //     status
    //     startDate
    //   }
    // }`);

    // if (Timer) {

    const {
      id: taskId,
      status: taskStatus,
      startDate,
    } = timer.Task_TaskToTimer || {}

    const taskData: Prisma.TaskUpdateInput = {}

    /**
     * Выставляем статус
     */
    // if (!taskStatus || (["New", "Paused"].indexOf(taskStatus) !== -1)) {
    // if (!taskStatus || taskStatus !== "Progress") {

    const progressStatus: NexusGenEnums['TaskStatus'] = 'Progress'

    if (!taskStatus || taskStatus !== progressStatus) {
      taskData.status = progressStatus
    }

    /**
     * Если в задаче не числится фактическая дата начала работ, выставляем
     */
    if (!startDate) {
      taskData.startDate = new Date()
    }

    /**
     * Если сформированы данные для обновления, обновляем таску
     */
    if (Object.keys(taskData).length > 0) {
      // await db.mutation.updateTask({
      //   where: {
      //     id: taskId,
      //   },
      //   data: taskData,
      // })
      //   .catch(console.error);

      // TODO Надо обновление таски засунуть сразу в создание таймера
      await ctx.prisma.task
        .update({
          where: {
            id: taskId,
          },
          data: taskData,
        })
        .catch(console.error)
    }

    // }
  }

  return {
    success: !!timer,
    message: '',
    errors: [],
    data: timer,
  }
}
