import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { TextField } from './index'
import { FormControl } from '../FormControl'

const meta: Meta<typeof TextField> = {
  title: 'Components/Form/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  render: (args) => <TextField {...args} />,
  args: {
    placeholder: 'Enter text...',
    style: { minWidth: '250px' },
  },
}

export const Disabled: Story = {
  render: (args) => <TextField {...args} />,
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    style: { minWidth: '250px' },
  },
}

export const WithValue: Story = {
  render: (args) => <TextField {...args} />,
  args: {
    value: 'Text input value',
    style: { minWidth: '250px' },
  },
}

export const WithFormControl: Story = {
  render: (args) => (
    <FormControl label="Text Field" required style={{ width: '250px' }}>
      <TextField {...args} />
    </FormControl>
  ),
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithFormControlError: Story = {
  render: (args) => (
    <FormControl
      label="Text Field with error"
      error
      helperText="This field is required"
      style={{ width: '250px' }}
    >
      <TextField {...args} />
    </FormControl>
  ),
  args: {
    placeholder: 'Enter text...',
  },
}
