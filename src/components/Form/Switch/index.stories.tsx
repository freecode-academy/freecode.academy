import React, { useState, useCallback } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '.'

// Компонент-обертка для интерактивного использования Switch
const InteractiveSwitch = (args: any) => {
  const [isChecked, setIsChecked] = useState(args.checked || false)

  const handleChange = useCallback((event: any) => {
    setIsChecked(event.target.checked)
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <Switch {...args} checked={isChecked} onChange={handleChange} />
      <div style={{ marginTop: '10px', fontSize: '14px' }}>
        Текущее состояние: {isChecked ? 'Включено' : 'Выключено'}
      </div>
    </div>
  )
}

const meta = {
  title: 'Components/Form/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Начальное состояние переключателя',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключение возможности изменения состояния',
    },
    label: {
      control: 'text',
      description: 'Текстовая метка',
    },
    labelPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
      description: 'Позиция метки',
    },
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

// Базовый рендерер для всех историй
const render = (args: any) => <InteractiveSwitch {...args} />

export const Default: Story = {
  render,
  args: {
    checked: false,
  },
}

export const Checked: Story = {
  render,
  args: {
    checked: true,
  },
}

export const Disabled: Story = {
  render,
  args: {
    disabled: true,
  },
}

export const DisabledWithlabel: Story = {
  render,
  args: {
    disabled: true,
    label: 'Label for disabled switch',
  },
}

export const CheckedDisabled: Story = {
  render,
  args: {
    checked: true,
    disabled: true,
  },
}

export const WithLabelRight: Story = {
  render,
  args: {
    checked: false,
    label: 'Включить уведомления',
    labelPosition: 'right',
  },
}

export const WithLabelLeft: Story = {
  render,
  args: {
    checked: true,
    label: 'Включить уведомления',
    labelPosition: 'left',
  },
}
