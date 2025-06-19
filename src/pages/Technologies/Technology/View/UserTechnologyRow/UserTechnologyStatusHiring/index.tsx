import React from 'react'
import { getUserTechnologyHiringStatusText } from 'src/helpers/getUserTechnologyHiringStatusText'
import { UserTechnologyHiringStatusViewProps } from './interfaces'

export const UserTechnologyHiringStatusView: React.FC<
  UserTechnologyHiringStatusViewProps
> = ({ value }) => {
  return <>{value ? getUserTechnologyHiringStatusText(value) : null}</>
}
