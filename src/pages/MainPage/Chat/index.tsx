import React from 'react'
import { MainPageChatMessages } from './Messages'
import {
  MainPageChatStyled,
  // MobileChatButtonStyled,
  // MobileChatModalStyled,
  // MobileChatHeaderStyled,
} from './styles'

export const MainPageChat: React.FC = () => {
  // const [isMobileModalOpen, setIsMobileModalOpen] = useState(true)

  // const toggleMobileModal = useCallback(() => {
  //   setIsMobileModalOpen((prev) => !prev)
  // }, [])

  return (
    <MainPageChatStyled>
      {/* Десктопная версия */}

      <MainPageChatMessages key="chat-content" />

      {/* Мобильная версия */}
      {/* <MobileChatButtonStyled onClick={toggleMobileModal}>
        💬
      </MobileChatButtonStyled> */}

      {/* <MobileChatModalStyled isOpen={isMobileModalOpen}>
        <MobileChatHeaderStyled>
          <h3>Глобальный ИИ-чат</h3>
          <button onClick={toggleMobileModal}>✕</button>
        </MobileChatHeaderStyled>
        {chatContent}
      </MobileChatModalStyled> */}
    </MainPageChatStyled>
  )
}
