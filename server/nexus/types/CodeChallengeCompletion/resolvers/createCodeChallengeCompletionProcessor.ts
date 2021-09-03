import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'

export const createCodeChallengeCompletionProcessor: FieldResolver<
  'Mutation',
  'createCodeChallengeCompletionProcessor'
> = async (_, args, ctx) => {
  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  // const user = await this.ctx.db.query.user({
  //   where: {
  //     id: currentUserId,
  //   },
  // }, `
  //   {
  //     id
  //     # Проекты, по которым есть уроки
  //     ProjectsCreated (
  //       where: {
  //         type: Education
  //       }
  //     ){
  //       id
  //       name
  //     }
  //   }
  // `);

  const user = await ctx.prisma.user.findUnique({
    where: {
      id: currentUserId,
    },
    include: {
      Projects_ProjectToUser: {
        where: {
          type: 'Education',
        },
      },
    },
  })

  // console.log('user', JSON.stringify(user, undefined, 2));

  if (!user) {
    throw new Error('Не был получен пользователь')
  }

  /**
   * Созданные пользователем проекты по обучению.
   */
  // const ProjectsCreated = user.ProjectsCreated;
  const ProjectsCreated = user.Projects_ProjectToUser

  const codeChallengeCondition = args.data.CodeChallenge.connect as
    | Prisma.CodeChallengeWhereUniqueInput
    | undefined

  // if (!codeChallengeCondition) {
  //   throw new Error("Не был получен идентификатор урока");
  // }

  if (!codeChallengeCondition) {
    throw new Error('Не был получен идентификатор урока')
  }

  // const codeChallenge = await this.ctx.db.query.codeChallenge({
  //   where: codeChallengeCondition,
  // });

  const codeChallenge = await ctx.prisma.codeChallenge.findUnique({
    where: codeChallengeCondition,
  })

  if (!codeChallenge) {
    throw new Error('Не был получен урок')
  }

  // console.log('codeChallenge', JSON.stringify(codeChallenge, undefined, 2));

  /**
   * Check if codeChallengeCompletion exists
   */
  const exists = await ctx.prisma.codeChallengeCompletion.findFirst({
    where: {
      // CreatedBy: {
      //   id: currentUserId,
      // },
      CreatedBy: currentUserId,
      // CodeChallenge: codeChallengeCondition
      CodeChallenge_CodeChallengeToCodeChallengeCompletion:
        codeChallengeCondition,
    },
  })

  if (exists) {
    throw new Error('CodeChallengeCompletion already exists')
  }

  // const CreatedBy = {
  //   connect: {
  //     id: currentUserId,
  //   },
  // }

  let Project: Prisma.ProjectCreateNestedOneWithoutProjectTasksInput | undefined

  /**
   * Если у пользователя есть проекты по обучению, то добавляем в первый же проект
   */
  // TODO надо проработать логику по выбору проектов по условию
  if (ProjectsCreated && ProjectsCreated.length) {
    Project = {
      connect: {
        id: ProjectsCreated[0].id,
      },
    }
  } else {
    Project = {
      create: {
        type: 'Education',
        name: 'Самообучение',
        CreatedBy: currentUserId,
      },
    }
  }

  const TaskProject: Prisma.ProjectTaskUncheckedCreateNestedManyWithoutTask_ProjectTaskToTaskInput =
    {
      create: {
        // CreatedBy: currentUserId,
        User: {
          connect: {
            id: currentUserId,
          },
        },
        Project_ProjectToProjectTask: Project,
      },
    }

  const createData: Prisma.CodeChallengeCompletionCreateInput = {
    User: {
      connect: {
        id: currentUserId,
      },
    },
    // CodeChallenge: {
    //   connect: {
    //     id: codeChallenge.id,
    //   },
    // },
    CodeChallenge_CodeChallengeToCodeChallengeCompletion: {
      connect: {
        id: codeChallenge.id,
      },
    },
    Task_CodeChallengeCompletionToTask: {
      create: {
        name: `Выполнение задания "${codeChallenge.name}"`,
        status: 'Progress',
        ProjectTasks: TaskProject,
        Timers: {
          create: {
            CreatedBy: currentUserId,
          },
        },
        CreatedBy: currentUserId,
        // TaskProjects,
        // ProjectTask: TaskProject,
      },
    },
  }

  // console.log('data', JSON.stringify(data, undefined, 2));

  /**
   * Stop all active timers
   */

  // await this.ctx.db.mutation.updateManyTimers({
  //   where: {
  //     stopedAt: null,
  //     CreatedBy: {
  //       id: currentUserId,
  //     },
  //   },
  //   data: {
  //     stopedAt: new Date(),
  //   },
  // });

  await ctx.prisma.timer.updateMany({
    where: {
      stopedAt: null,
      CreatedBy: currentUserId,
    },
    data: {
      stopedAt: new Date(),
    },
  })

  const codeChallengeCompletion =
    await ctx.prisma.codeChallengeCompletion.create({
      data: createData,
    })

  return {
    success: !!codeChallengeCompletion,
    message: '',
    errors: [],
    data: codeChallengeCompletion,
  }
}
