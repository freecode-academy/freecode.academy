import styled from 'styled-components'
import { TaskStatus } from 'src/gql/generated'

export const TimerCardStyled = styled.div<{ $isRunning?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: ${({ $isRunning }) => ($isRunning ? '#f0fdf4' : '#ffffff')};
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ $isRunning }) => ($isRunning ? '#86efac' : '#e5e7eb')};
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`

export const TimerCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`

export const TimerCardTitle = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #3b82f6;
    }
  }

  span {
    color: #9ca3af;
  }
`

export const TimerCardTime = styled.div<{ $isRunning?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ $isRunning }) => ($isRunning ? '#16a34a' : '#6b7280')};
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;
    color: ${({ $isRunning }) => ($isRunning ? '#22c55e' : '#9ca3af')};
  }

  .running-indicator {
    color: #22c55e;
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
  }
`

export const TimerCardProject = styled.div`
  font-size: 0.875rem;

  a {
    color: #6b7280;
    text-decoration: none;
    background: #f3f4f6;
    padding: 4px 10px;
    border-radius: 4px;

    &:hover {
      color: #3b82f6;
      background: #eff6ff;
    }
  }
`

export const TimerCardDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
`

const statusColors: Record<TaskStatus, { bg: string; color: string }> = {
  [TaskStatus.NEW]: { bg: '#e5e7eb', color: '#374151' },
  [TaskStatus.ACCEPTED]: { bg: '#dbeafe', color: '#1d4ed8' },
  [TaskStatus.PROGRESS]: { bg: '#fef3c7', color: '#b45309' },
  [TaskStatus.COMPLETED]: { bg: '#d1fae5', color: '#047857' },
  [TaskStatus.DISCUSS]: { bg: '#e0e7ff', color: '#4338ca' },
  [TaskStatus.PAUSED]: { bg: '#f3e8ff', color: '#7c3aed' },
  [TaskStatus.REJECTED]: { bg: '#fee2e2', color: '#dc2626' },
  [TaskStatus.APPROVED]: { bg: '#dcfce7', color: '#166534' },
  [TaskStatus.DONE]: { bg: '#d1fae5', color: '#047857' },
  [TaskStatus.REVISIONSREQUIRED]: { bg: '#fef9c3', color: '#854d0e' },
}

export const TimerCardStatus = styled.span<{ $status: TaskStatus }>`
  display: inline-block;
  width: fit-content;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 4px;
  background: ${({ $status }) => statusColors[$status]?.bg || '#e5e7eb'};
  color: ${({ $status }) => statusColors[$status]?.color || '#374151'};
`

export const TimerCardAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const TimerCardDates = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 0.8125rem;
  color: #6b7280;
`

export const TimerCardDateItem = styled.div`
  display: flex;
  gap: 4px;

  span {
    color: #9ca3af;
  }
`

export const TimerCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 8px;
  border-top: 1px solid #e5e7eb;

  span {
    font-size: 14px;
    color: #6b7280;
  }
`
