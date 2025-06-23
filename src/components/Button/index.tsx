import React from 'react'
import { ButtonStyled } from './styles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'success' | 'default'
  size?: 'small'
}

export const Button: React.FC<ButtonProps> = ({ children, ...other }) => {
  return <ButtonStyled {...other}>{children}</ButtonStyled>
}
