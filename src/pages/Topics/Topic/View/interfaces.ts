import { EditableObjectProps } from 'apollo-cms/dist/DataView/Object/Editable'
import { ResourceFragment } from 'src/gql/generated'

export interface TopicViewProps extends EditableObjectProps {
  // data: Maybe<TopicQuery>

  object: ResourceFragment | undefined

  // classes?: any;

  /**
   * Разрешено ли редактировать блог топика
   */
  canChangeBlog: boolean
}
