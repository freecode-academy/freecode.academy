import React, { useMemo, useCallback } from 'react'
import { getUserTechnologyStatusText } from 'src/helpers/getUserTechnologyStatusText'
import { UserTechnologyStatus } from 'src/modules/gql/generated'
import { Autocomplete } from 'src/uikit/Autocomplete'
import { UserTechnologyStatusViewProps } from './interfaces'

const UserTechnologyStatusView: React.FC<UserTechnologyStatusViewProps> = ({
  value,
  inEditMode,
  setValue,
  error,
}) => {
  const onStatusChange = useCallback(
    (value: keyof typeof UserTechnologyStatus) => {
      // console.log('onStatusChange value', value);
      // console.log('onStatusChange item', item);

      const status = UserTechnologyStatus[value]

      setValue && setValue('status', status)
    },
    [setValue]
  )

  return useMemo(() => {
    if (inEditMode) {
      const keys = Object.keys(UserTechnologyStatus) as Array<
        keyof typeof UserTechnologyStatus
      >
      const items = keys.map((key) => ({
        value: key,
        label: getUserTechnologyStatusText(UserTechnologyStatus[key]),
      }))

      return (
        <Autocomplete
          items={items}
          value={value || ''}
          onSelect={onStatusChange}
          inputProps={{
            label: 'Статус',
            fullWidth: true,
            error: !!error,
            helperText: error?.message,
          }}
          wrapperStyle={{
            width: '100%',
          }}
        />
      )
    }

    return <>{value ? getUserTechnologyStatusText(value) : null}</>
  }, [error, inEditMode, onStatusChange, value])
}

export default UserTechnologyStatusView
