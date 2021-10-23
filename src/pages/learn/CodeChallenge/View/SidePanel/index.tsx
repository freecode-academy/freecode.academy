import Link from 'next/link'
import React, { useCallback, useMemo } from 'react'
import { CodeChallengeTest } from '../../interfaces'
import { ChallengeDescription } from './ChallengeDescription'
import ChallengeTitle from './ChallengeTitle'
import { SidePanelProps } from './interfaces'
import { SidePanelStyled } from './styles'
import TestSuite from './TestSuite'
import ToolPanel from './ToolPanel'
import { ToolPanelCompletions } from './ToolPanel/Completions'

const SidePanel: React.FC<SidePanelProps> = ({
  codeChallenge,
  showToolPanel,
  executeChallenge,
  codeChallengeCompletion,
  currentUser,
}) => {
  const { forumTopicId, description, instructions, videoUrl } = codeChallenge

  const openHelpModal = useCallback(() => {
    // eslint-disable-next-line no-console
    // console.log('openHelpModal')
  }, [])
  // const openResetModal = useCallback(() => {
  //   // eslint-disable-next-line no-console
  //   console.log('openResetModal')
  // }, [])
  const openVideoModal = useCallback(() => {
    // eslint-disable-next-line no-console
    // console.log('openVideoModal')
  }, [])

  const title = codeChallenge.localeTitle || codeChallenge.name

  const breadCrumbs = useMemo(() => {
    const block = codeChallenge.Block

    if (!block) {
      return null
    }

    const rootBlock = block.Parent

    const parent = rootBlock ? (
      <span>
        <Link href={`/learn/sections/${rootBlock.id}`}>
          <a title={rootBlock.name || ''}>{rootBlock.name}</a>
        </Link>{' '}
        /
      </span>
    ) : null

    return (
      <div>
        {parent}{' '}
        <Link href={`/learn/sections/${block.id}`}>
          <a title={block.name || ''}>{block.name}</a>
        </Link>
      </div>
    )
  }, [codeChallenge.Block])

  // const isChallengeCompleted = true

  const tests = useMemo(
    () => (codeChallenge.tests || []) as CodeChallengeTest[],
    [codeChallenge.tests]
  )

  const toolPanel = useMemo(
    () =>
      showToolPanel ? (
        <ToolPanel
          guideUrl={
            forumTopicId
              ? `https://forum.freecodecamp.org/t/${forumTopicId}`
              : null
          }
          videoUrl={videoUrl}
          openHelpModal={openHelpModal}
          // openResetModal={openResetModal}
          openVideoModal={openVideoModal}
          executeChallenge={executeChallenge}
          currentUser={currentUser}
        />
      ) : null,
    [
      executeChallenge,
      forumTopicId,
      openHelpModal,
      openVideoModal,
      showToolPanel,
      videoUrl,
      currentUser,
    ]
  )

  return useMemo(() => {
    return (
      <SidePanelStyled
        className="instructions-panel"
        role="complementary"
        tabIndex={-1}
      >
        <ChallengeTitle
          codeChallengeCompletion={codeChallengeCompletion}
          executeChallenge={executeChallenge}
          currentUser={currentUser}
        >
          {title}
        </ChallengeTitle>

        {breadCrumbs}

        <ChallengeDescription
          description={description || ''}
          instructions={instructions || ''}
          // section={section}
          codeChallengeCompletion={codeChallengeCompletion}
          currentUser={currentUser}
        />
        {toolPanel}
        <TestSuite tests={tests} />

        <ToolPanelCompletions codeChallenge={codeChallenge} />
      </SidePanelStyled>
    )
  }, [
    codeChallengeCompletion,
    executeChallenge,
    currentUser,
    title,
    breadCrumbs,
    description,
    instructions,
    toolPanel,
    tests,
    codeChallenge,
  ])
}

export default SidePanel
