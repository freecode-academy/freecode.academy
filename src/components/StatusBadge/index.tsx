import React from 'react'
import { TaskStatus } from 'src/gql/generated'
import { StyledBadge, getStatusColors } from './styles'

export type StatusType = TaskStatus | 'default'

type StatusBadgeProps = {
  status: StatusType
  active?: boolean
  children?: React.ReactNode
  onClick?: () => void
  className?: string
}

export { getStatusColors }

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  active = true,
  children,
  onClick,
  className,
}) => {
  const colors = getStatusColors(status)

  return (
    <StyledBadge
      $colors={colors}
      $active={active}
      $clickable={!!onClick}
      onClick={onClick}
      className={className}
    >
      {children || status}
    </StyledBadge>
  )
}

export const TaskStatusBadge: React.FC<{
  status: TaskStatus
  active?: boolean
  onClick?: () => void
  className?: string
}> = ({ status, active = true, onClick, className }) => {
  return (
    <StatusBadge
      status={status}
      active={active}
      onClick={onClick}
      className={className}
    >
      {status}
    </StatusBadge>
  )
}
