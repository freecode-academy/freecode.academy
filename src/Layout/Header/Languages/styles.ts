import styled, { css } from 'styled-components'
import { minWidth } from 'src/theme/helpers'
import theme from 'src/theme'
import Link from 'next/link'

export const LanguagesSelectOptionFlagStyled = styled.span``
export const LanguagesSelectOptionLabelStyled = styled.span``

export const LanguagesSelectOptionStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  font-size: ${theme.fontSize.sm};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.primary};
  }

  &:first-child {
    border-top-left-radius: ${theme.borderRadius.md};
    border-top-right-radius: ${theme.borderRadius.md};
  }

  &:last-child {
    border-bottom-left-radius: ${theme.borderRadius.md};
    border-bottom-right-radius: ${theme.borderRadius.md};
  }
`

// Чекбокс для контроля CSS-стейта меню
export const LanguagesCheckboxStyled = styled.input.attrs({
  type: 'checkbox',
  id: 'language-menu-toggle',
})`
  display: none;
`

// Контейнер для выпадающего меню
export const LanguagesContainerStyled = styled.div`
  position: relative;
  display: inline-block;
  min-width: auto;
  white-space: nowrap;

  ${minWidth.sm(css`
    min-width: 160px;
  `)}
`

// Кнопка-триггер для открытия меню
export const LanguagesTriggerStyled = styled.label.attrs({
  htmlFor: 'language-menu-toggle',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSize.sm};
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: ${theme.colors.ring};
  }

  &:focus {
    outline: 2px solid ${theme.colors.ring};
    outline-offset: 2px;
  }
`

// Контент выпадающего меню
export const LanguagesContentStyled = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 50;
  margin-top: ${theme.spacing[1]};
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.lg};
  display: none;

  #language-menu-toggle:checked ~ & {
    display: block;
  }
`

// Иконка стрелки
export const ChevronIconStyled = styled.svg`
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease-in-out;

  #language-menu-toggle:checked ~ ${LanguagesTriggerStyled} & {
    transform: rotate(180deg);
  }
`

export const LanguageListItemStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`
