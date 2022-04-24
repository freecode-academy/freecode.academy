import { useMemo } from 'react'
import { TaskStatus } from 'src/modules/gql/generated'
import { CodeChallengeContext } from 'src/pages/learn/CodeChallenge/Context'

export enum CodeChallengeStatus {
  None = 'None',
  Done = 'Done',
  Progress = 'Progress',
}

type useCodeChallengStatusProps = {
  codeChallengeCompletion: CodeChallengeContext['codeChallengeCompletion']
}

export const useCodeChallengStatus: (props: useCodeChallengStatusProps) => {
  status: CodeChallengeStatus
} = ({ codeChallengeCompletion }) => {
  return useMemo(() => {
    const taskStatus = codeChallengeCompletion?.Task?.status

    let status: CodeChallengeStatus

    switch (taskStatus) {
      case undefined:
        status = CodeChallengeStatus.None
        break
      case TaskStatus.DONE:
      case TaskStatus.COMPLETED:
        status = CodeChallengeStatus.Done
        break
      default:
        status = CodeChallengeStatus.Progress
    }

    return {
      status,
    }
  }, [codeChallengeCompletion?.Task?.status])
}
