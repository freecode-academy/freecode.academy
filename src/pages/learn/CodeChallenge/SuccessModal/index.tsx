import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
} from 'material-ui/Dialog'

import Button from 'material-ui/Button'
import { useEffect, useRef } from 'react'

type CodeChallengeSuccessModalProps = {
  opened: boolean
  onClose: NonNullable<DialogProps['onClose']>
}

export const CodeChallengeSuccessModal: React.FC<
  CodeChallengeSuccessModalProps
> = ({ opened, onClose }) => {
  const okButton = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    let onKeyPress: ((event: KeyboardEvent) => void) | undefined

    /**
     * Если состояние открытое
     */
    if (opened) {
      onKeyPress = (event) => {
        if (event.code === 'Enter') {
          okButton.current?.click()
        }
      }

      /**
       * То навешиваем событие
       */
      global.document.addEventListener('keypress', onKeyPress)
    }

    return () => {
      onKeyPress && global.document.removeEventListener('keypress', onKeyPress)
    }
  }, [opened])

  return (
    <Dialog open={opened} onClose={onClose} role="CodeChallengeSuccess">
      <DialogTitle>Поздравляю!</DialogTitle>
      <DialogContent>
        <DialogContentText role="message">
          Задание успешно выполнено!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          color="primary"
          role="close"
          buttonRef={okButton}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
