import React, { useMemo, useCallback } from 'react'
import { UserTechnologyLevelProps } from './interfaces'
import TextField from 'material-ui/TextField'
import { getUserTechnologyLevelText } from 'src/helpers/getUserTechnologyLevelText'
import { Scalars } from 'src/modules/gql/generated'

const UserTechnologyLevel: React.FC<UserTechnologyLevelProps> = ({
  inEditMode,
  value,
  onChange: onChangeProp,
  error,
  name,
  ...other
}) => {
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let newValue: Scalars['UserTechnologyLevel'] | null | undefined

      if (event.target.value) {
        const value = parseInt(event.target.value)

        if (!isFinite(value) || value < 1 || value > 5) {
          return
        }

        newValue = value as Scalars['UserTechnologyLevel']
      } else {
        newValue = null
      }

      newValue !== undefined &&
        onChangeProp &&
        onChangeProp(event, newValue ? newValue : null)
    },
    [onChangeProp]
  )

  return useMemo(() => {
    const title = value ? getUserTechnologyLevelText(value) : null

    if (inEditMode) {
      return (
        <TextField
          name={name}
          value={value || ''}
          onChange={onChange}
          error={!!error}
          label="Уровень"
          helperText={error?.message || title || 'Укажите от 1 до 5'}
          type="number"
          fullWidth
          {...other}
        />
      )
    } else {
      return <>{title}</>
    }
  }, [error, inEditMode, name, onChange, other, value])
}

export default UserTechnologyLevel
