import React, { forwardRef, ComponentPropsWithRef, ElementType } from 'react'
import { ButtonStyled } from './styles'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outlined'
  | 'text'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonProps<C extends ElementType = 'button'> = {
  as?: C
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
} & ComponentPropsWithRef<C>

export const Button = forwardRef<any, ButtonProps>(function Button<
  C extends ElementType = 'button'
>(
  {
    type = 'button',
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    startIcon,
    endIcon,
    children,
    as = 'button',
    ...other
  }: ButtonProps<C>,
  ref: React.ForwardedRef<Element>
) {
  return (
    <ButtonStyled
      as={as}
      type={type}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      ref={ref}
      {...other}
    >
      {startIcon && <span className="button-start-icon">{startIcon}</span>}
      <span className="button-text">{children}</span>
      {endIcon && <span className="button-end-icon">{endIcon}</span>}
    </ButtonStyled>
  )
})

Button.displayName = 'Button'
