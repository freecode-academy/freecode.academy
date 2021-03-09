import { CodeChallengeFragment, Scalars } from 'src/modules/gql/generated'

export type CodeChallengeDiscussProps = {
  challenge: CodeChallengeFragment
  topicId: Scalars['ID'] | undefined
}
