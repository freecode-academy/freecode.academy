import React, { useCallback, useContext, useMemo } from 'react'
import dynamic from 'next/dynamic'
import DesktopLayout from './DesktopLayout'
// import { FccEditor as Editor } from './Editor'
import { CodeChallengeEditor as Editor } from './Editor2'
import { challengeTypes } from '../utils/challengeTypes'
import SidePanel from './SidePanel'
import { CodeChallengeViewProps } from './interfaces'
import CodeChallengeOutputView from './Output'
import Context from '../Context'
import useExecuteChallenge from '../hooks/useExecuteChallenge'

// import Preview from './Preview'

/**
 * Не рендерим на сервере, потому что фрейм не срабатывает событие onLoad
 */
const Preview = dynamic(import('./Preview'), { ssr: false })

export const CodeChallengeView: React.FC<CodeChallengeViewProps> = ({
  codeChallenge,
  codeChallengeCompletion,
  tabIndex,
  topicId,
}) => {
  // const onResize = () => {
  //   this.setState({ resizing: true })
  // }

  // const onStopResize = () => {
  //   this.setState({ resizing: false })
  // }

  const context = useContext(Context)

  const currentUser = context?.user

  const challengeFile = context?.challengeData.file ?? null
  const challenge = context?.challenge

  // const contents = context?.challengeData.file.contents || ""

  const output = useMemo(
    () => context?.logger.output ?? [],
    [context?.logger.output]
  )

  // const getChallengeFile = useCallback((): TestFile | null => {
  //   const { files } = codeChallenge

  //   return files && Array.isArray(files) ? files[0] : null
  // }, [codeChallenge])

  const hasPreview = useMemo(() => {
    const { challengeType } = codeChallenge

    return (
      challengeType === challengeTypes.html ||
      challengeType === challengeTypes.modern
    )
  }, [codeChallenge])

  // const saveEditorContent = useCallback(() => {
  //   // eslint-disable-next-line no-console
  //   // console.log('saveEditorContent')
  // }, [])

  const updateFile = useCallback(
    ({
      editorValue,
    }: {
      // key: string;
      editorValue: string
    }) => {
      if (!context) {
        return
      }

      const challengeData = context.challengeData

      const file = challengeData.file

      context.setChallengeData({
        ...challengeData,
        file: {
          ...file,
          contents: editorValue,
        },
      })

      // const challengeData = context?.challengeData

      // context?.setContents(editorValue);
    },
    [context]
  )

  const executeChallenge = useExecuteChallenge()

  // const setEditorFocusability = useCallback((_args: any) => {
  //   // eslint-disable-next-line no-console
  //   // console.log('setEditorFocusability args', { ...args })
  // }, [])

  const editor = challengeFile && (
    <Editor
      {...challengeFile}
      // saveEditorContent={saveEditorContent}
      updateFile={updateFile}
      // containerRef={containerRef}
      // ref={editorRef}
      // fileKey={challengeFile.key}
      contents={challengeFile.contents}
      executeChallenge={executeChallenge}
      // setEditorFocusability={setEditorFocusability}
    />
  )

  const sidePanel = useMemo(
    () => (
      <SidePanel
        // description={description}
        // guideUrl={getGuideUrl({ forumTopicId, title })}
        // instructions={instructions}
        // section={dasherize(blockName)}
        showToolPanel={true}
        // title={this.getBlockNameTitle()}
        // videoUrl={this.getVideoUrl()}
        className="full-height"
        codeChallenge={codeChallenge}
        executeChallenge={executeChallenge}
        codeChallengeCompletion={codeChallengeCompletion}
        currentUser={currentUser}
      />
    ),
    [executeChallenge, codeChallenge, codeChallengeCompletion, currentUser]
  )

  const preview = useMemo(
    () => (
      <Preview
        className="full-height"
        disableIframe={false}
        iframeStatus={true}
      />
    ),
    []
  )

  const testOutput = useMemo(() => {
    return <CodeChallengeOutputView output={output} />
  }, [output])

  if (!challenge?.id) {
    return null
  }

  return (
    <DesktopLayout
      // challengeFile={getChallengeFile()}
      challengeFile={challengeFile}
      editor={editor}
      hasPreview={hasPreview}
      instructions={sidePanel}
      preview={preview}
      // resizeProps={this.resizeProps}
      testOutput={testOutput}
      tabIndex={tabIndex}
      topicId={topicId}
      challenge={challenge}
      currentUser={currentUser}
      codeChallengeCompletion={codeChallengeCompletion}
    />
  )
}
