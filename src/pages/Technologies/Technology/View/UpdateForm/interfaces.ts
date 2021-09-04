import { TechnologyViewProps } from '../interfaces'

export type TechnologyUpdateFormProps = {
  technology: TechnologyViewProps['technology']

  editFormOpenedSetter: React.Dispatch<React.SetStateAction<boolean>>
}
