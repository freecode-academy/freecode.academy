import React, { useCallback, useMemo } from 'react'
import { OfficeProjectListSectionStyled } from '../../components/ui/list/styles'
import { OfficeTitleStyled } from '../../components/ui/Title/styles'
import { OfficeTimersViewProps } from './interfaces'
import OfficeTimersTimer from './Timer'
import moment from 'moment'
import CheckBox from 'src/uikit/CheckBox'

const OfficeTimersView: React.FC<OfficeTimersViewProps> = ({
  timers,
  date,
  setDate,
  user,
  currentUserOnly,
  setCurrentUserOnly,
}) => {
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
            {currentUserOnlyCheckbox}
          </OfficeTitleStyled>
          {timers.map((timer) => {
            return <OfficeTimersTimer key={timer.id} timer={timer} />
          })}
        </OfficeProjectListSectionStyled>
      </>
    )
  }, [date, timers, onChange, currentUserOnlyCheckbox])
}

export default OfficeTimersView
