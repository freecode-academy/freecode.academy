import React from 'react'
import { MainPageCommentsProps } from './interfaces'

import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import UikitComment from 'src/uikit/Comments/Comment'
import Link from 'next/link'

const MainPageComments: React.FC<MainPageCommentsProps> = ({ objects }) => {
  return (
    <>
      <Paper className="paper">
        <Typography variant="title" className="paper--title">
          Новые Комментарии
        </Typography>

        {objects.map((n) => (
          <UikitComment key={n.id} object={n} linkType={'target'} />
        ))}

        <p>
          <Link href="/comments">
            <a>Все комментарии</a>
          </Link>
        </p>
      </Paper>
    </>
  )
}

export default MainPageComments
