import React, { forwardRef, useEffect, useState } from 'react'
import {
  SwitchStyled,
  SwitchInput,
  SwitchLabel,
  SwitchLabelText,
  SwitchWrapper,
} from './styles'

export type SwitchProps = {
  checked?: boolean
  disabled?: boolean
  className?: string
  id?: string
  name?: string
  label?: string
  labelPosition?: 'left' | 'right'
} & React.InputHTMLAttributes<HTMLInputElement> & {
    innerRef?: React.Ref<HTMLInputElement>
  }

// Базовый функциональный компонент
const SwitchBase: React.FC<SwitchProps> = ({
  id,
  checked = false,
  disabled = false,
  className,
  name,
  label,
  labelPosition = 'right',
  innerRef,
  ...other
}) => {
  const [labelRef, labelRefSetter] = useState<HTMLSpanElement | null>(null)

  const [switchId, switchIdSetter] = useState(id)

  useEffect(() => {
    if (id) {
      return
    }

    switchIdSetter(`switch--${Math.random().toString()}`)
  }, [id])

  // Компонент переключателя
  const switchControl = (
    <SwitchWrapper>
      <SwitchInput
        id={switchId}
        name={name}
        checked={checked}
        disabled={disabled}
        ref={innerRef}
        {...other}
      />
      <SwitchLabel htmlFor={switchId} $checked={checked} $disabled={disabled} />
    </SwitchWrapper>
  )

  useEffect(() => {
    if (!labelRef) {
      return
    }

    const onLabelClick = (event: MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()

      if (!(event.currentTarget instanceof HTMLElement)) {
        return
      }

      const input = event.currentTarget?.parentElement?.querySelector('input')

      input?.click()
    }

    labelRef.addEventListener('click', onLabelClick)

    return () => {
      labelRef.removeEventListener('click', onLabelClick)
    }
  }, [labelRef, innerRef])

  const labelItem = label && (
    <SwitchLabelText ref={labelRefSetter}>{label}</SwitchLabelText>
  )

  return (
    <SwitchStyled className={className}>
      {label && labelPosition === 'left' && labelItem}

      {switchControl}

      {label && labelPosition === 'right' && labelItem}
    </SwitchStyled>
  )
}

// Обёртка с forwardRef для поддержки рефов
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  function SwitchWithRef(props, ref) {
    return <SwitchBase {...props} innerRef={ref} />
  }
)

Switch.displayName = 'Switch'
