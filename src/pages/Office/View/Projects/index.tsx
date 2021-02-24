import { Button, Typography } from 'material-ui'
import React, { useCallback, useMemo, useState } from 'react'
import OfficeProjectsCreate from '../../Projects/Project/Create/View'

const OfficePageViewProjects: React.FC = () => {
  const [opened, setOpened] = useState(false)

  const startEdit = useCallback(() => {
    setOpened(true)
  }, [])

  const cancel = useCallback(() => {
    setOpened(false)
  }, [])

  return useMemo(() => {
    if (!opened) {
      return (
        <div>
          <Typography variant="subheading">
            Добавьте проект, чтобы отслеживать задачи и трудозатраты
          </Typography>

          <Button onClick={startEdit} color="primary" variant="raised">
            Добавить проект
          </Button>
        </div>
      )
    } else {
      return <OfficeProjectsCreate cancel={cancel} />
    }
  }, [opened, startEdit, cancel])
}

export default OfficePageViewProjects
