import React, { useCallback, useContext, useMemo } from 'react'

import { DesktopLayoutProps, DesktopLayoutTabIndex } from './interfaces'
import ReflexContainer from 'src/uikit/ReFlex/ReflexContainer'
import ReflexElement from 'src/uikit/ReFlex/ReflexElement'
import { DesktopLayoutStyled, DesktopLayoutToolbarStyled } from './styles'
import Context, { PrismaCmsContext } from '@prisma-cms/context'
import Tabs, { Tab } from 'material-ui/Tabs'
import { useRouter } from 'next/router'
import CodeChallengeDiscuss from './Discuss'
import { IconButton } from 'material-ui'
import DiscussIcon from 'material-ui-icons/Comment'
import Link from 'next/link'
import EditIcon from 'material-ui-icons/ModeEdit'

const DesktopLayout: React.FC<DesktopLayoutProps> = (props) => {
  // static displayName = 'DesktopLayout';

  // static propTypes = {
  //   classes: PropTypes.object.isRequired,
  //   challengeFile: PropTypes.shape({
  //     key: PropTypes.string
  //   }),
  //   editor: PropTypes.element,
  //   hasPreview: PropTypes.bool,
  //   instructions: PropTypes.element,
  //   preview: PropTypes.element,
  //   resizeProps: PropTypes.shape({
  //     onStopResize: PropTypes.func,
  //     onResize: PropTypes.func
  //   }),
  //   testOutput: PropTypes.element
  // };

  const {
    // classes,
    // resizeProps,
    instructions,
    challengeFile,
    editor,
    testOutput,
    hasPreview,
    preview,
    tabIndex,
    challenge,
    topicId,
    currentUser,
  } = props

  const context = useContext(Context) as PrismaCmsContext

  // const [tabIndex, setTabIndex] = useState(0);

  const router = useRouter()

  const challengeId = challenge.id

  const onChangeTabs = useCallback(
    (
      _event: React.ChangeEvent<Record<string, unknown>>,
      value: DesktopLayoutTabIndex
    ) => {
      let url: string | undefined

      const topicId = challenge.Topic?.id

      switch (value) {
        case DesktopLayoutTabIndex.Root:
          url = `/learn/exercises/${challengeId}`

          break

        case DesktopLayoutTabIndex.Discuss:
          url = `/learn/exercises/${challengeId}/discuss${
            topicId ? `/${topicId}` : ''
          }`

          break

        default:
          return
      }

      router.push(url)
    },
    [challenge.Topic?.id, challengeId, router]
  )

  return useMemo(() => {
    const user = context?.user

    let content: JSX.Element | undefined

    switch (tabIndex) {
      case DesktopLayoutTabIndex.Root:
        content = (
          <ReflexContainer
            // className={[classes?.root, 'desktop-layout'].join(' ')}
            // orientation="vertical"
            flexDirection="row"
          >
            <ReflexElement flex={0.7}>{instructions}</ReflexElement>
            {/* <ReflexSplitter propagate={true} /> */}
            <ReflexElement flex={1}>
              {challengeFile && (
                <ReflexContainer key={challengeFile.key} flexDirection="column">
                  <ReflexElement flex={1} overflow="hidden">
                    {editor}
                  </ReflexElement>
                  {/* <ReflexSplitter propagate={true} /> */}
                  <ReflexElement flex={0.25}>{testOutput}</ReflexElement>
                </ReflexContainer>
              )}
            </ReflexElement>
            {/* {hasPreview && <ReflexSplitter propagate={true} />} */}
            {hasPreview && <ReflexElement flex={0.7}>{preview}</ReflexElement>}
          </ReflexContainer>
        )

        break

      case DesktopLayoutTabIndex.Discuss:
        content = (
          <CodeChallengeDiscuss challenge={challenge} topicId={topicId} />
        )

        break

      default:
    }

    return (
      <DesktopLayoutStyled>
        {!user ? (
          <div className="auth-reminder">
            <button onClick={context.openLoginForm}>Авторизуйтесь</button>,
            чтобы сохранить свой прогресс
          </div>
        ) : null}

        <DesktopLayoutToolbarStyled>
          <Tabs value={tabIndex} onChange={onChangeTabs} className="tabs">
            <Tab label="Задание" value={DesktopLayoutTabIndex.Root} />
            <Tab
              label={
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Обсудить &nbsp;{challenge.Topic ? <DiscussIcon /> : null}
                </span>
              }
              value={DesktopLayoutTabIndex.Discuss}
            />
          </Tabs>

          {currentUser?.sudo ? (
            <Link href={`/learn/exercises/edit/${challenge.id}`}>
              <a rel="noindex nofollow">
                <IconButton title="Редактировать">
                  <EditIcon />
                </IconButton>
              </a>
            </Link>
          ) : null}
        </DesktopLayoutToolbarStyled>

        {content}
      </DesktopLayoutStyled>
    )
  }, [
    challenge,
    challengeFile,
    context.openLoginForm,
    context?.user,
    editor,
    hasPreview,
    instructions,
    onChangeTabs,
    preview,
    tabIndex,
    testOutput,
    topicId,
    currentUser,
  ])
}

export default DesktopLayout
