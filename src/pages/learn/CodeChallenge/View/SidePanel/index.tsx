import Link from 'next/link'
import React, { useCallback, useMemo } from 'react'
import { CodeChallengeTest } from '../../interfaces'
import ChallengeDescription from './ChallengeDescription'
import ChallengeTitle from './ChallengeTitle'
import { SidePanelProps } from './interfaces'
import { SidePanelStyled } from './styles'
import TestSuite from './TestSuite'
import ToolPanel from './ToolPanel'

const SidePanel: React.FC<SidePanelProps> = ({
  object,
  showToolPanel,
  executeChallenge,
  codeChallengeCompletion,
}) => {
  const { forumTopicId, description, instructions, videoUrl } = object

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

  const title = object.localeTitle || object.name

  const breadCrumbs = useMemo(() => {
    const block = object.Block
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
  }, [object.Block])

  // const isChallengeCompleted = true

  const tests = useMemo(() => (object.tests || []) as CodeChallengeTest[], [
    object.tests,
  ])

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
        />
      ) : null,
    [
      executeChallenge,
      forumTopicId,
      openHelpModal,
      openVideoModal,
      showToolPanel,
      videoUrl,
    ]
  )

  return useMemo(() => {
    return (
      <SidePanelStyled
        className="instructions-panel"
        role="complementary"
        tabIndex={-1}
      >
        <ChallengeTitle codeChallengeCompletion={codeChallengeCompletion}>
          {title}
        </ChallengeTitle>

        {breadCrumbs}

        <ChallengeDescription
          description={description || ''}
          instructions={instructions || ''}
          // section={section}
        />
        {toolPanel}
        <TestSuite tests={tests} />
      </SidePanelStyled>
    )
  }, [
    codeChallengeCompletion,
    title,
    breadCrumbs,
    description,
    instructions,
    toolPanel,
    tests,
  ])
}

export default SidePanel
