import React, { useMemo } from 'react'
import { CodeChallengeOutputViewProps } from './interfacse'
import { CodeChallengeOutputViewStyled } from './styles'

const CodeChallengeOutputView: React.FC<CodeChallengeOutputViewProps> = ({
  output,
}) => {
  const content = useMemo(() => {
    return output.map((n, index) => <div key={index}>{n}</div>)
  }, [output])

  return (
    // @ts-expect-error types

    <CodeChallengeOutputViewStyled role="test-result--output">
      {content}
    </CodeChallengeOutputViewStyled>
  )

  // return (
  //   <>
  //     <pre
  //       className="output-text"
  //       dangerouslySetInnerHTML={{ __html: output }}
  //     />
  //   </>
  // )
}

export default CodeChallengeOutputView
