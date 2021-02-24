import { Button } from 'material-ui'
import React, { useCallback, useMemo, useState } from 'react'
import OfficePageViewProjectsCreate from './CreateProject'

const OfficePageViewProjects: React.FC = () => {
  const [opened, setOpened] = useState(true)

  const startEdit = useCallback(() => {
    setOpened(true)
  }, [])

  return useMemo(() => {
    if (!opened) {
      return (
        <Button onClick={startEdit} color="primary" variant="raised">
          Добавить проект
        </Button>
      )
    } else {
      return <OfficePageViewProjectsCreate />
    }
  }, [opened, startEdit])
}

export default OfficePageViewProjects
