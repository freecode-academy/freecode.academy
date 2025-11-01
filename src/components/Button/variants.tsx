import React, { forwardRef } from 'react'
import { Button, ButtonProps } from './index'

export const SuccessButton = forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, 'variant'>
>((props, ref) => <Button variant="success" ref={ref} {...props} />)

export const ErrorButton = forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, 'variant'>
>((props, ref) => <Button variant="error" ref={ref} {...props} />)

export const WarningButton = forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, 'variant'>
>((props, ref) => <Button variant="warning" ref={ref} {...props} />)

export const InfoButton = forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, 'variant'>
>((props, ref) => <Button variant="info" ref={ref} {...props} />)

// Добавляем displayName для каждой кнопки для улучшения отладки
SuccessButton.displayName = 'SuccessButton'
ErrorButton.displayName = 'ErrorButton'
WarningButton.displayName = 'WarningButton'
InfoButton.displayName = 'InfoButton'
