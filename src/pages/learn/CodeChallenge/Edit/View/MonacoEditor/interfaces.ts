import { CodeChallengeFragment } from 'src/modules/gql/generated'

export type CodeChallengeEditMonacoEditorProps<
  T extends keyof CodeChallengeFragment
> = {
  name: T
  value: CodeChallengeFragment[T]
  setValue: (name: T, value: CodeChallengeFragment[T]) => void
}
