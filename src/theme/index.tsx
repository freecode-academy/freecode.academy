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
  primary: '#030213',
  primaryForeground: '#ffffff',
  secondary: '#f3f3f5',
  secondaryForeground: '#030213',
  foreground: '#030213',
  background: '#ffffff',
  border: 'rgba(0, 0, 0, 0.1)',
  ring: '#717182',
  muted: '#ececf0',
  mutedForeground: '#717182',
  accent: '#e9ebef',
  accentForeground: '#030213',
  destructive: '#d4183d',
  destructiveForeground: '#ffffff',
  input: '#f3f3f5',
  green: {
    100: '#c0f2c0',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
  },
  blue: {
    500: '#3b82f6',
    600: '#2563eb',
  },
  yellow: {
    400: '#fbbf24',
    100: '#fef3c7',
    800: '#92400e',
  },
  red: {
    100: '#fee2e2',
    800: '#991b1b',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  text: {
    primary: '#333',
    secondary: '#757575',
    disabled: '#9e9e9e',
    light: '#ffffff',
  },
  success: '#4caf50',
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
}

/**
 * Итоговая тема
 */
const theme = {
  colors,
  breakpoints,

  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  },
  borderRadius: {
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  fontSize: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '6xl': '3.75rem',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },

  /**
   * Тема для личного кабинета
   */
  officeTheme,
} as const

export type Theme = typeof theme

// props that later will be injected by styled-components
export type ThemeProps = { theme?: Theme }

export default theme
