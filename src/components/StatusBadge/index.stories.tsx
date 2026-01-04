import React, { useState, useCallback } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { StatusBadge, TaskStatusBadge } from './index'
import { TaskStatus } from 'src/gql/generated'

type ClickableStatusBadgeProps = {
  status: TaskStatus
  active: boolean
  onStatusClick: (status: TaskStatus) => void
}

const ClickableStatusBadge: React.FC<ClickableStatusBadgeProps> = ({
  status,
  active,
  onStatusClick,
}) => {
  const handleClick = useCallback(() => {
    onStatusClick(status)
  }, [onStatusClick, status])

  return (
    <TaskStatusBadge status={status} active={active} onClick={handleClick} />
  )
}

const TASK_STATUSES: TaskStatus[] = [
  TaskStatus.NEW,
  TaskStatus.ACCEPTED,
  TaskStatus.PROGRESS,
  TaskStatus.PAUSED,
  TaskStatus.DISCUSS,
  TaskStatus.REVISIONSREQUIRED,
  TaskStatus.APPROVED,
  TaskStatus.DONE,
  TaskStatus.COMPLETED,
  TaskStatus.REJECTED,
]

const meta = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StatusBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    status: TaskStatus.NEW,
    active: true,
  },
}

export const AllStatusesActive: Story = {
  args: { status: TaskStatus.NEW },
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {TASK_STATUSES.map((status) => (
        <TaskStatusBadge key={status} status={status} active={true} />
      ))}
    </div>
  ),
}

export const AllStatusesInactive: Story = {
  args: { status: TaskStatus.NEW },
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {TASK_STATUSES.map((status) => (
        <TaskStatusBadge key={status} status={status} active={false} />
      ))}
    </div>
  ),
}

export const ActiveVsInactive: Story = {
  args: { status: TaskStatus.NEW },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#374151' }}>
          Active (selected)
        </h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {TASK_STATUSES.map((status) => (
            <TaskStatusBadge key={status} status={status} active={true} />
          ))}
        </div>
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#374151' }}>
          Inactive (not selected)
        </h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {TASK_STATUSES.map((status) => (
            <TaskStatusBadge key={status} status={status} active={false} />
          ))}
        </div>
      </div>
    </div>
  ),
}

const ClickableDemo = () => {
  const handleClick = useCallback((status: TaskStatus) => {
    alert(`Clicked: ${status}`)
  }, [])

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {TASK_STATUSES.map((status) => (
        <ClickableStatusBadge
          key={status}
          status={status}
          active={true}
          onStatusClick={handleClick}
        />
      ))}
    </div>
  )
}

export const Clickable: Story = {
  args: { status: TaskStatus.NEW },
  render: () => <ClickableDemo />,
}

const InteractiveDemo = () => {
  const [selected, setSelected] = useState<TaskStatus[]>([
    TaskStatus.PROGRESS,
    TaskStatus.NEW,
  ])

  const toggleStatus = useCallback((status: TaskStatus) => {
    setSelected((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    )
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {TASK_STATUSES.map((status) => (
          <ClickableStatusBadge
            key={status}
            status={status}
            active={selected.includes(status)}
            onStatusClick={toggleStatus}
          />
        ))}
      </div>
      <div style={{ fontSize: '12px', color: '#6b7280' }}>
        Selected: {selected.length > 0 ? selected.join(', ') : 'None'}
      </div>
    </div>
  )
}

export const Interactive: Story = {
  args: { status: TaskStatus.NEW },
  render: () => <InteractiveDemo />,
}

export const InCardContext: Story = {
  args: { status: TaskStatus.PROGRESS },
  render: () => (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e5e7eb',
        maxWidth: '400px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1.125rem', color: '#1f2937' }}>
          Task Title
        </h3>
        <TaskStatusBadge status={TaskStatus.PROGRESS} />
      </div>
      <p
        style={{
          margin: '8px 0 0',
          fontSize: '0.875rem',
          color: '#6b7280',
        }}
      >
        Task description goes here...
      </p>
    </div>
  ),
}
