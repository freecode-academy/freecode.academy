import React from 'react'
import { TextFieldStyled } from './styles'

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean
  error?: string
}

export const TextField: React.FC<TextFieldProps> = ({ ...other }) => {
  return <TextFieldStyled {...other} />
}
