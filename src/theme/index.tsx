import officeTheme from './office'

/**
 * Размеры экранов
 */
const breakpoints = {
  /**
   * 480
   */
  xs: 480,
  /**
   * 768
   */
  sm: 768,
  /**
   * 992
   */
  md: 992,
  /**
   * 1200
   */
  lg: 1200,
  /**
   * 1920
   */
  xl: 1920,
}

/**
 * Цвета
 */
const colors = {
  primary: '#333',
}

/**
 * Итоговая тема
 */
const theme = {
  colors,
  breakpoints,

  /**
   * Тема для личного кабинета
   */
  officeTheme,
}

export type Theme = typeof theme

// props that later will be injected by styled-components
export type ThemeProps = { theme?: Theme }

export default theme
