import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { FormControl } from './index'
import { TextField } from '../TextField'

const meta: Meta<typeof FormControl> = {
  title: 'Components/Form/FormControl',
  component: FormControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormControl>

export const Default: Story = {
  args: {
    label: 'Default Label',
    children: (
      <TextField type="text" placeholder="Input" style={{ padding: '8px' }} />
    ),
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Form Field with helperText',
    helperText: 'This field has an helperText',
    children: (
      <TextField type="text" placeholder="Input" style={{ padding: '8px' }} />
    ),
  },
}

export const WithError: Story = {
  args: {
    label: 'Form Field with Error',
    error: true,
    helperText: 'This field has an error',
    children: (
      <TextField type="text" placeholder="Input" style={{ padding: '8px' }} />
    ),
  },
}

export const Required: Story = {
  args: {
    label: 'Required Field',
    required: true,
    children: (
      <TextField type="text" placeholder="Input" style={{ padding: '8px' }} />
    ),
  },
}

export const WithoutLabel: Story = {
  args: {
    children: (
      <TextField
        type="text"
        placeholder="Input without label"
        style={{ padding: '8px' }}
      />
    ),
  },
}
