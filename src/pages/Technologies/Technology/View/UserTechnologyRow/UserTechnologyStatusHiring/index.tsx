import React, { useMemo, useCallback } from 'react'
import { getUserTechnologyHiringStatusText } from 'src/helpers/getUserTechnologyHiringStatusText'
import { UserTechnologyHiringStatus } from 'src/modules/gql/generated'
import { Autocomplete } from 'src/uikit/Autocomplete'
import { UserTechnologyHiringStatusViewProps } from './interfaces'

const UserTechnologyHiringStatusView: React.FC<UserTechnologyHiringStatusViewProps> =
  ({ value, inEditMode, setValue, error }) => {
    const onStatusChange = useCallback(
      (value: keyof typeof UserTechnologyHiringStatus) => {
        // console.log('onStatusChange value', value);
        // console.log('onStatusChange item', item);

        const hiring_status = UserTechnologyHiringStatus[value]

        setValue && setValue('hiring_status', hiring_status)
      },
      [setValue]
    )

    return useMemo(() => {
      if (inEditMode) {
        const keys = Object.keys(UserTechnologyHiringStatus) as Array<
          keyof typeof UserTechnologyHiringStatus
        >
        const items = keys.map((key) => ({
          value: key,
          label: getUserTechnologyHiringStatusText(
            UserTechnologyHiringStatus[key]
          ),
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

      return <>{value ? getUserTechnologyHiringStatusText(value) : null}</>
    }, [error, inEditMode, onStatusChange, value])
  }

export default UserTechnologyHiringStatusView
