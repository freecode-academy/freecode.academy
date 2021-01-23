import React, { useCallback, useMemo, useState } from 'react'
import { ImagePopupProps } from './interfaces'
import { ImagePopupImageStyled, ImagePopupStyled } from './styled'
import Dialog from 'material-ui/Dialog'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'

/**
 * Компонент вывода картинки со всплывашкой
 */
const ImagePopup: React.FC<ImagePopupProps> = ({ path }) => {
  const [opened, setOpened] = useState(false)

  const onClick = useCallback(() => {
    setOpened(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpened(false)
  }, [])

  return useMemo(() => {
    if (!path) {
      return null
    }

    return (
      <ImagePopupStyled>
        <Dialog fullScreen open={opened} onClose={handleClose}>
          <AppBar className="appbar" position="static">
            <Toolbar
              className="toolbar"
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
              }}
            >
              <IconButton
                color="inherit"
                onClick={handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <ImagePopupImageStyled
            src={`/images/resized/big/${path}`}
            onClick={onClick}
            role="popup"
          />
        </Dialog>

        <ImagePopupImageStyled
          src={`/images/resized/middle/${path}`}
          onClick={onClick}
          role="main"
        />
      </ImagePopupStyled>
    )
  }, [handleClose, onClick, opened, path])
}

export default ImagePopup
