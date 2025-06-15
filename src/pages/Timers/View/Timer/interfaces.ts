import { EditableObjectProps } from 'apollo-cms/dist/DataView/Object/Editable'
import { Timer } from 'src/gql/generated'

export interface TimerViewProps extends EditableObjectProps {
  classes?: any

  // data: {
  //   object?: Timer
  // }

  object: Timer | null | undefined
}
