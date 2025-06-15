import { PrismaCmsComponentProps } from '@prisma-cms/component/dist'
import { ResourceFragment } from 'src/gql/generated'

export interface TopicBlogProps extends PrismaCmsComponentProps {
  Topic: (ResourceFragment & { blogID?: string }) | null | undefined

  updateObject: (data: any) => void

  inEditMode: boolean
}
