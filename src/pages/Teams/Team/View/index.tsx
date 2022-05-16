import { Typography } from 'material-ui'
import { ResourceFragment } from 'src/modules/gql/generated'

type TeamViewProps = {
  resource: ResourceFragment
}

export const TeamView: React.FC<TeamViewProps> = ({ resource }) => {
  return (
    <>
      <Typography variant="title">{resource.name}</Typography>
    </>
  )
}
