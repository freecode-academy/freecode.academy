import React from 'react'
import {
  FormControlStyled,
  FormControlLabel,
  FormControlHelperText,
} from './styles'

export type FormControlProps = React.PropsWithChildren<{
  label: string
  required?: boolean
  error?: boolean
  helperText?: string
}> &
  React.HTMLAttributes<HTMLDivElement>

export const FormControl: React.FC<FormControlProps> = ({
  children,
  label,
  required,
  error,
  helperText,
  id,
  ...other
}) => {
  return (
    <FormControlStyled className={other.className} $error={error ?? false}>
      {label && (
        <FormControlLabel htmlFor={id}>
          {label}
          {required && <span className="required">*</span>}
        </FormControlLabel>
      )}
      {children}
      {helperText && (
        <FormControlHelperText>{helperText}</FormControlHelperText>
      )}
    </FormControlStyled>
  )
}
