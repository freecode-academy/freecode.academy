import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Button } from './index'
import {
  SuccessButton,
  ErrorButton,
  WarningButton,
  InfoButton,
} from './variants'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </div>
  ),
}

export const StateVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button variant="success">Success</Button>
      <Button variant="error">Error</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
    </div>
  ),
}

export const VariantButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <SuccessButton>Success Button</SuccessButton>
      <ErrorButton>Error Button</ErrorButton>
      <WarningButton>Warning Button</WarningButton>
      <InfoButton>Info Button</InfoButton>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}

export const WithStartIcon: Story = {
  args: {
    children: 'With Start Icon',
    startIcon: '→',
  },
}

export const WithEndIcon: Story = {
  args: {
    children: 'With End Icon',
    endIcon: '→',
  },
}

export const SubmitButton: Story = {
  args: {
    children: 'Submit Form',
    type: 'submit',
  },
}
