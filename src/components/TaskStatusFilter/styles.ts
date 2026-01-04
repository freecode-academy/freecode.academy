import styled, { css } from 'styled-components'

export const TaskStatusFilterStyled = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
  padding: 12px 0;
  margin-bottom: 16px;
`

export const TaskStatusFilterLabelStyled = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`

export const TaskStatusFilterButtonsStyled = styled.div`
  display: contents;
`

export const TaskStatusFilterClearButtonStyled = styled.button<{
  $active?: boolean
}>`
  font-size: 0.75rem;
  padding: 4px 12px;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;

  ${({ $active }) =>
    $active
      ? css`
          background: #2563eb;
          color: #ffffff;
          border: 2px solid #2563eb;
        `
      : css`
          background: #ffffff;
          color: #6b7280;
          border: 2px solid #e5e7eb;

          &:hover {
            background: #f3f4f6;
            color: #374151;
            border-color: #d1d5db;
          }
        `}
`
