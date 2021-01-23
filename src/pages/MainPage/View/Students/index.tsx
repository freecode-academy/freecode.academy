import React from 'react'
import { MainPageStudentsProps } from './interfaces'

import UikitUserLink from 'src/uikit/Link/User'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Grid from 'src/uikit/Grid'
import Link from 'next/link'

const MainPageStudents: React.FC<MainPageStudentsProps> = ({ objects }) => {
  return (
    <>
      <Paper className="paper">
        <Typography variant="title" className="paper--title">
          Новые ученики
        </Typography>

        <Grid container spacing={24}>
          {objects.map((n) => (
            <Grid key={n.id} item xs={12} sm={6} md={3}>
              <UikitUserLink user={n} />
            </Grid>
          ))}
        </Grid>

        <p>
          <Link href="/people/students">
            <a>Все ученики</a>
          </Link>
        </p>
      </Paper>
    </>
  )
}

export default MainPageStudents
