import React, { useMemo, useCallback } from 'react'
import { UserTechnologyLevelProps } from './interfaces'
import TextField from 'material-ui/TextField'

const UserTechnologyLevel: React.FC<UserTechnologyLevelProps> = ({
  inEditMode,
  value,
  onChange: onChangeProp,
  error,
  ...other
}) => {
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value) {
        const value = parseInt(event.target.value)

        if (!isFinite(value) || value < 1 || value > 5) {
          return
        }
      }

      onChangeProp && onChangeProp(event)
    },
    [onChangeProp]
  )

  return useMemo(() => {
    const fieldName = 'level'

    const title = value
      ? ['Начальный', 'Ниже среднего', 'Средний', 'Уверенный', 'Эксперт'][
          value - 1
        ]
      : null

    if (inEditMode) {
      return (
        <TextField
          name={fieldName}
          value={value || ''}
          onChange={onChange}
          error={!!error}
          label="Уровень знания"
          helperText={error?.message || title || 'Укажите от 1 до 5'}
          type="number"
          fullWidth
          {...other}
        />
      )
    } else {
      return <>{title}</>
    }
  }, [error, inEditMode, onChange, other, value])
}

export default UserTechnologyLevel
