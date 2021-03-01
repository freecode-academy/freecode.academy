import React, { useCallback, useMemo, useState } from 'react'
import { OfficeProjectListSectionStyled } from '../../components/ui/list/styles'
import { OfficeTitleStyled } from '../../components/ui/Title/styles'
import { OfficeTimersViewProps } from './interfaces'
import OfficeTimersTimer from './Timer'
import moment from 'moment'
import CheckBox from 'src/uikit/CheckBox'
import { IconButton } from 'material-ui'
import CloseIcon from 'material-ui-icons/Close'
import { OfficeProjectPageViewTaskProjectProps } from '../../Projects/Project/View/Tasks/Task/Project/interfaces'

const OfficeTimersView: React.FC<OfficeTimersViewProps> = ({
  timers: timersProps,
  date,
  setDate,
  user,
  currentUserOnly,
  setCurrentUserOnly,
}) => {
  const [filterProject, setFilterProject] = useState<
    OfficeProjectPageViewTaskProjectProps['project'] | null
  >(null)

  /**
   * Фильтр по проекту
   */
  const filterByProject = useCallback(
    (project: OfficeProjectPageViewTaskProjectProps['project']) => {
      setFilterProject(project)
    },
    []
  )

  const removeProjectFilter = useCallback(() => {
    setFilterProject(null)
  }, [])

  const filters = useMemo(() => {
    if (!filterProject) {
      return null
    }

    return (
      <div>
        {filterProject.name}{' '}
        <IconButton onClick={removeProjectFilter} title="Очистить фильтр">
          <CloseIcon />
        </IconButton>
      </div>
    )
  }, [filterProject, removeProjectFilter])

  const timers = useMemo(() => {
    if (filterProject) {
      return timersProps.filter((n) =>
        n.Task.TaskProjects?.find((p) => p.Project.id === filterProject.id)
      )
    } else {
      return timersProps
    }
  }, [filterProject, timersProps])

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newDate = moment(event.currentTarget.value)

      if (newDate && newDate.isValid()) {
        setDate(newDate)
      }
    },
    [setDate]
  )

  const currentUserOnlyOnChange = useCallback(
    (_, checked: boolean) => {
      setCurrentUserOnly(checked)
    },
    [setCurrentUserOnly]
  )

  const currentUserOnlyCheckbox = useMemo(() => {
    if (!user) {
      return null
    } else {
      return (
        <CheckBox
          checked={currentUserOnly}
          label="Только мои"
          onChange={currentUserOnlyOnChange}
        />
      )
    }
  }, [currentUserOnly, currentUserOnlyOnChange, user])

  return useMemo(() => {
    let totalTime = 0

    const timersList = timers.map((timer) => {
      const diff =
        (timer.stopedAt || new Date()).getTime() - timer.createdAt.getTime()

      if (diff) {
        totalTime += diff
      }

      return (
        <OfficeTimersTimer
          key={timer.id}
          timer={timer}
          filterByProject={filterByProject}
        />
      )
    })

    return (
      <>
        <OfficeProjectListSectionStyled>
          <OfficeTitleStyled>
            Лог выполнения{' '}
            <input
              type="date"
              value={date.format('YYYY-MM-DD')}
              onChange={onChange}
              style={{
                color: 'white',
                background: 'none',
                border: 0,
              }}
            />{' '}
            {currentUserOnlyCheckbox}{' '}
            {totalTime ? moment.utc(totalTime).format('HH:mm:ss') : null}
          </OfficeTitleStyled>

          {filters}

          {timersList}
        </OfficeProjectListSectionStyled>
      </>
    )
  }, [
    date,
    onChange,
    currentUserOnlyCheckbox,
    filters,
    timers,
    filterByProject,
  ])
}

export default OfficeTimersView
