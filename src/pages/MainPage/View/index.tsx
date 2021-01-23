import Typography from 'material-ui/Typography'
import React, { useMemo } from 'react'
import {
  MainPageCodeChallengeCompletionFragment,
  Resource_Fragment,
  TasksConnectionTaskFragment,
  UserNoNestingFragment,
} from 'src/modules/gql/generated'
import MainPageCodeChallengeCompletions from './CodeChallengeCompletions'
import MainPageComments from './Comments'
import MainPageStudents from './Students'
import { MainPageProps } from './interfaces'
import { MainPageViewStyled } from './styles'
import MainPageTasksNeedHelps from './TasksNeedHelp'

const MainPageView: React.FC<MainPageProps> = (props) => {
  return useMemo(() => {
    const students =
      props.data?.students.reduce<UserNoNestingFragment[]>((curr, next) => {
        if (next) {
          curr.push(next)
        }
        return curr
      }, []) ?? []

    const completions =
      props.data?.codeChallengeCompletions.reduce<
        MainPageCodeChallengeCompletionFragment[]
      >((curr, next) => {
        if (next) {
          curr.push(next)
        }
        return curr
      }, []) ?? []

    const comments =
      props.data?.comments.reduce<Resource_Fragment[]>((curr, next) => {
        if (next) {
          curr.push(next)
        }
        return curr
      }, []) ?? []

    const tasksNeedHelp =
      props.data?.tasksNeedHelp.edges.reduce<TasksConnectionTaskFragment[]>(
        (curr, next) => {
          if (next?.node) {
            curr.push(next.node)
          }
          return curr
        },
        []
      ) ?? []

    return (
      <MainPageViewStyled>
        <Typography variant="title">
          Изучайте современный JavaScript с нами совершенно бесплатно!
        </Typography>

        <MainPageCodeChallengeCompletions objects={completions} />

        <MainPageStudents objects={students} />

        <MainPageTasksNeedHelps objects={tasksNeedHelp} />

        <MainPageComments objects={comments} />
      </MainPageViewStyled>
    )
  }, [
    props.data?.codeChallengeCompletions,
    props.data?.comments,
    props.data?.students,
    props.data?.tasksNeedHelp.edges,
  ])
}

export default MainPageView
