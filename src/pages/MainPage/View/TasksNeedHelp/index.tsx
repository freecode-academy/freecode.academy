import React from 'react'
import { MainPageTasksNeedHelpsProps } from './interfaces'

import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Link from 'next/link'
import TasksView from 'src/pages/Tasks/View'

const MainPageTasksNeedHelps: React.FC<MainPageTasksNeedHelpsProps> = ({
  objects,
}) => {
  return (
    <>
      <Paper className="paper">
        <Typography variant="title" className="paper--title">
          Задачи где нужна помощь
        </Typography>

        <TasksView objects={objects} total={0} limit={0} page={0} />

        <p>
          <Link href="/tasks?needHelp=true&status_in=New&status_in=Accepted&status_in=Progress&status_in=Paused&status_in=RevisionsRequired&status_in=Discuss&status_in=Approved&status_in=Done">
            <a>Все задачи где нужна помощь</a>
          </Link>
        </p>
      </Paper>
    </>
  )
}

export default MainPageTasksNeedHelps
