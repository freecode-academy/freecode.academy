import { User_Fragment } from 'src/modules/gql/generated'

export type UserViewTechnologiesProps = {
  objects: User_Fragment['UserTechnologies']
}
