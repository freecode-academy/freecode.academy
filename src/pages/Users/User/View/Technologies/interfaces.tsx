import { UserFragment } from 'src/modules/gql/generated'

export type UserViewTechnologiesProps = {
  objects: UserFragment['UserTechnologies']
}
