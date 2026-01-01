import type { Meta, StoryObj } from '@storybook/react'
import { UserLink } from './index'

const mockUser = {
  id: '1',
  username: 'johndoe',
  fullname: 'John Doe',
}

const mockUserWithoutFullname = {
  id: '2',
  username: 'janedoe',
}

const meta: Meta<typeof UserLink> = {
  title: 'uikit/Link/UserLink',
  component: UserLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showName: { control: 'boolean' },
    withAvatar: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'normal', 'big'],
    },
  },
}

export default meta
type Story = StoryObj<typeof UserLink>

export const Default: Story = {
  args: {
    user: mockUser,
  },
}

export const WithAvatarOnly: Story = {
  args: {
    user: mockUser,
    showName: false,
    withAvatar: true,
  },
}

export const WithNameOnly: Story = {
  args: {
    user: mockUser,
    showName: true,
    withAvatar: false,
  },
}

export const WithAvatarAndName: Story = {
  args: {
    user: mockUser,
    showName: true,
    withAvatar: true,
  },
}

export const SmallSize: Story = {
  args: {
    user: mockUser,
    size: 'small',
  },
}

export const BigSize: Story = {
  args: {
    user: mockUser,
    size: 'big',
  },
}

export const WithPosition: Story = {
  args: {
    user: mockUser,
    position: 'Developer',
  },
}

export const UsernameOnly: Story = {
  args: {
    user: mockUserWithoutFullname,
  },
}

export const WithSecondary: Story = {
  args: {
    user: mockUser,
    secondary: <span style={{ color: '#666', fontSize: '12px' }}>Online</span>,
  },
}
