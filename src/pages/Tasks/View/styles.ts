import styled from 'styled-components'

export const TasksViewStyled = styled.section``

export const TasksGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const TaskCard = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'title status'
    'meta meta'
    'description description';
  gap: 8px;
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`

export const TaskCardTitle = styled.h3`
  grid-area: title;
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  align-self: center;
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #3b82f6;
    }
  }
`

export const TaskCardStatus = styled.div`
  grid-area: status;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`

export const TaskCardMeta = styled.div`
  grid-area: meta;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  font-size: 0.8125rem;
  color: #6b7280;

  .date {
    margin-left: auto;
  }
`

export const TaskMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 14px;
    height: 14px;
    color: #9ca3af;
  }
`

export const TaskCardDescription = styled.p`
  grid-area: description;
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const TaskNeedHelpBadge = styled.span`
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 9999px;
  font-weight: 500;
  background: #fef2f2;
  color: #dc2626;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    width: 12px;
    height: 12px;
  }
`

export const TaskActiveTimers = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
