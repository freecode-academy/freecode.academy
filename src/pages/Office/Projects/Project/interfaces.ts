import { PageProps } from 'src/pages/_App/interfaces'
import { OfficeProjectPageViewProps } from './View/interfaces'

export type OfficeProjectPageProps = PageProps & {
  view: OfficeProjectPageViewProps['view'] | undefined
}
