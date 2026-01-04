import styled, { css } from 'styled-components'
import { StatusType } from './index'

const STATUS_COLORS: Record<StatusType, { bg: string; color: string }> = {
  New: {
    bg: '#d97706',
    color: '#ffffff',
  },
  Accepted: {
    bg: '#0d9488',
    color: '#ffffff',
  },
  Progress: {
    bg: '#2563eb',
    color: '#ffffff',
  },
  Paused: {
    bg: '#7c3aed',
    color: '#ffffff',
  },
  Discuss: {
    bg: '#ca8a04',
    color: '#ffffff',
  },
  RevisionsRequired: {
    bg: '#ea580c',
    color: '#ffffff',
  },
  Approved: {
    bg: '#059669',
    color: '#ffffff',
  },
  Done: {
    bg: '#16a34a',
    color: '#ffffff',
  },
  Completed: {
    bg: '#15803d',
    color: '#ffffff',
  },
  Rejected: {
    bg: '#dc2626',
    color: '#ffffff',
  },
  default: {
    bg: '#6b7280',
    color: '#ffffff',
  },
}

const INACTIVE_STYLE = {
  bg: '#ffffff',
  color: '#6b7280',
  border: '#e5e7eb',
}

export const getStatusColors = (status: StatusType) => {
  return STATUS_COLORS[status] || STATUS_COLORS.default
}

export const StyledBadge = styled.span<{
  $colors: { bg: string; color: string }
  $active: boolean
  $clickable: boolean
}>`
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  padding: 4px 12px;
  border-radius: 9999px;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.15s ease;

  ${({ $colors, $active }) =>
    $active
      ? css`
          background: ${$colors.bg};
          color: ${$colors.color};
          border: 1px solid ${$colors.bg};
        `
      : css`
          background: ${INACTIVE_STYLE.bg};
          color: ${INACTIVE_STYLE.color};
          border: 1px solid ${INACTIVE_STYLE.border};
        `}

  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;

      &:hover {
        transform: scale(1.02);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      }

      &:active {
        transform: scale(0.98);
      }
    `}
`
