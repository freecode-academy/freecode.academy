import React from 'react'
import { getUserTechnologyStatusText } from 'src/helpers/getUserTechnologyStatusText'
// import { UserTechnologyStatus } from 'src/gql/generated'
// import { Autocomplete } from 'src/uikit/Autocomplete'
import { UserTechnologyStatusViewProps } from './interfaces'

export const UserTechnologyStatusView: React.FC<
  UserTechnologyStatusViewProps
> = ({
  value,
  // inEditMode,
  // error,
}) => {
  // return useMemo(() => {
  //   if (inEditMode) {
  //     const keys = Object.keys(UserTechnologyStatus) as Array<
  //       keyof typeof UserTechnologyStatus
  //     >
  //     const items = keys.map((key) => ({
  //       value: key,
  //       label: getUserTechnologyStatusText(UserTechnologyStatus[key]),
  //     }))

  //     return (
  //       <Autocomplete
  //         items={items}
  //         value={value || ''}
  //         inputProps={{
  //           label: 'Статус',
  //           fullWidth: true,
  //           error: !!error,
  //           helperText: error?.message,
  //         }}
  //         wrapperStyle={{
  //           width: '100%',
  //         }}
  //       />
  //     )
  //   }

  // }, [error, inEditMode, value])

  return <>{value ? getUserTechnologyStatusText(value) : null}</>
}

// export default UserTechnologyStatusView
