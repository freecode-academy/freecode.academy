import React, { useCallback, useContext, useMemo } from 'react'

// import { openModal, executeChallenge } from '../redux';
import { ToolPanelProps } from './interfaces'

import { ToolPanelStyled, MenuItem, ButtonStyled } from './styles'

import DropdownButton from './DropdownButton'
// import useExecuteChallenge from '../hooks/useExecuteChallenge'
import Context from '../../../Context'
import { ExecuteChallengeButton } from '../ExecuteChallengeButton'

// const mapStateToProps = () => ({});
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       executeChallenge,
//       openHelpModal: () => openModal('help'),
//       openVideoModal: () => openModal('video'),
//       openResetModal: () => openModal('reset')
//     },
//     dispatch
//   );

const ToolPanel: React.FC<ToolPanelProps> = ({
  // isMobile,
  // openHelpModal,
  // openVideoModal,
  // openResetModal,
  guideUrl,
  videoUrl,
  executeChallenge,
  user,
}) => {
  // const openHelpModal = useCallback(() => {
  //   return null;
  // }, []);

  // const executeChallenge = useExecuteChallenge()

  const context = useContext(Context)

  const codeChallengeCompletion = context?.codeChallengeCompletion

  const resetChallengeData = useCallback(() => {
    context?.resetChallengeData()
  }, [context])

  return useMemo(() => {
    const items: JSX.Element[] = []

    if (guideUrl) {
      items.push(
        <MenuItem
          key="guideUrl"
          href={guideUrl}
          target="_blank"
          rel="nofollow noindex noreferrer"
        >
          Подсказка
        </MenuItem>
      )
    }

    if (videoUrl) {
      items.push(
        <MenuItem
          // onClick={openVideoModal}
          key="videoUrl"
          href={videoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Смотреть видео
        </MenuItem>
      )
    }

    return (
      <ToolPanelStyled className={'tool-panel-group button-group'}>
        <ExecuteChallengeButton
          executeChallenge={executeChallenge}
          codeChallengeCompletion={codeChallengeCompletion}
          user={user}
        />

        <ButtonStyled className="btn-invert" onClick={resetChallengeData}>
          Восстановить код
        </ButtonStyled>

        {items.length ? (
          <DropdownButton>
            {/* <MenuItem
        onClick={openHelpModal}
      >
        Обсудить на форуме
      </MenuItem> */}
            {items}
          </DropdownButton>
        ) : null}
      </ToolPanelStyled>
    )
  }, [
    codeChallengeCompletion,
    executeChallenge,
    guideUrl,
    resetChallengeData,
    videoUrl,
    user,
  ])
}

ToolPanel.displayName = 'ToolPanel'

export default ToolPanel

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ToolPanel);
