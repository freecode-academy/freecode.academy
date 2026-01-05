import { Meta, StoryObj } from '@storybook/react'
import { TopicCard } from './index'
import { TopicsConnectionTopicFragment } from 'src/gql/generated'

const meta = {
  title: 'Components/TopicCard',
  component: TopicCard,
} satisfies Meta<typeof TopicCard>

export default meta
type Story = StoryObj<typeof meta>

const mockTopic: TopicsConnectionTopicFragment = {
  id: '1',
  name: 'Sample Topic',
  uri: 'sample-topic',
  createdAt: new Date('2024-01-01T00:00:00Z'),
  longtitle:
    'This is a sample topic description that demonstrates the topic card component functionality.',
  CreatedBy: {
    id: 'user1',
    username: 'john_doe',
    fullname: 'John Doe',
  },
  Blog: {
    id: 'blog1',
    name: 'Tech Blog',
    uri: 'tech-blog',
  },
}

export const Default: Story = {
  args: {
    topic: mockTopic,
  },
}

export const WithoutAuthor: Story = {
  args: {
    topic: {
      ...mockTopic,
      CreatedBy: null,
    },
  },
}

export const WithoutBlog: Story = {
  args: {
    topic: {
      ...mockTopic,
      Blog: null,
    },
  },
}

export const WithoutIntro: Story = {
  args: {
    topic: {
      ...mockTopic,
      longtitle: null,
    },
  },
}

export const Minimal: Story = {
  args: {
    topic: {
      id: '1',
      name: 'Minimal Topic',
      uri: 'minimal-topic',
      createdAt: new Date('2024-01-01T00:00:00Z'),
      longtitle: null,
      CreatedBy: null,
      Blog: null,
    },
  },
}
