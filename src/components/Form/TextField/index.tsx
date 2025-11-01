import React, { forwardRef } from 'react'
import { TextFieldInputStyled, TextFieldStyled } from './styles'

export type TextFieldProps = {
  error?: boolean
  fullWidth?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, error, fullWidth = true, ...other }, ref) => {
    return (
      <TextFieldStyled
        className={className}
        style={{ width: fullWidth ? '100%' : 'auto' }}
      >
        <TextFieldInputStyled $error={error} ref={ref} {...other} />
      </TextFieldStyled>
    )
  }
)

TextField.displayName = 'TextField'
