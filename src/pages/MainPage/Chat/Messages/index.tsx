/* eslint-disable no-console */
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  DialogDocument,
  useCreateChatMessageProcessorMutation,
  useDialogQuery,
} from 'src/modules/gql/generated'
import { useAppContext } from 'src/pages/_App/Context'

import { MainPageChatMessagesStyled } from './styles'

import {
  ChatInputStyled,
  ChatMessagesStyled,
  ChatMessageStyled,
  NonAuthNoticeStyled,
  ChatInputContainerStyled,
  SendButtonStyled,
  ErrorMessageStyled,
} from './styles'

type MainPageChatMessagesProps = {
  //
}

export const MainPageChatMessages: React.FC<MainPageChatMessagesProps> = (
  ...other
) => {
  const context = useAppContext()

  console.log('context', context)

  const { user, onAuthSuccess } = context || {}

  console.log('MainPageChatMessages user', user)

  const [error, errorSetter] = useState<Error | null>(null)

  const handleErrorReset = useCallback(() => {
    errorSetter(null)
  }, [])

  const response = useDialogQuery({
    skip: !user,
  })

  const messages = useMemo(
    () => response.data?.chatMessagesDialog || [],
    [response.data]
  )

  console.log('messages', messages)

  const [messagesContainer, messagesContainerSetter] =
    useState<HTMLDivElement | null>(null)

  const [createChatMessage, { loading: inRequest }] =
    useCreateChatMessageProcessorMutation({
      refetchQueries: [DialogDocument],
    })

  const isAnonymous = !user

  const [inputValue, setInputValue] = useState('')

  // const [hasInteracted, setHasInteracted] = useState(false)
  const hasInteracted = messages.length > 0

  const handleSendMessage = useCallback(() => {
    setInputValue((text) => {
      createChatMessage({
        variables: {
          data: {
            content: text,
            toUser: {
              username: '',
            },
          },
        },
      })
        .then((r) => {
          console.log('r.data?.response', r.data?.response)
          if (r.data?.response) {
            const { success, message, data, createdUser } = r.data.response

            if (!success || !data) {
              errorSetter(new Error(message || 'Something went wrong'))

              return
            } else {
              console.log('createdUser', createdUser)
              console.log('onAuthSuccess', onAuthSuccess)

              if (createdUser) {
                onAuthSuccess?.call(null, createdUser)
              }

              setInputValue('')
            }
          }
        })
        .catch((error) => {
          console.error(error)
          errorSetter(error)
        })

      return text
    })
  }, [createChatMessage, onAuthSuccess])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSendMessage()
      }
    },
    [handleSendMessage]
  )

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(e.target.value)
    },
    []
  )

  console.log('inRequest', inRequest)
  console.log('inputValue', inputValue)

  useEffect(() => {
    if (!messagesContainer || !messages.length) {
      return
    }

    // Прокрутка до последнего сообщения
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }, [messages, messagesContainer])

  return (
    <MainPageChatMessagesStyled {...other}>
      {!hasInteracted && isAnonymous && (
        <NonAuthNoticeStyled>
          <p>
            Если у вас уже есть аккаунт, <a href="/auth/login">авторизуйтесь</a>
            .
          </p>
          <p>
            Или продолжайте как гость - после отправки сообщения будет создан
            анонимный аккаунт.
          </p>
        </NonAuthNoticeStyled>
      )}

      <ChatMessagesStyled
        ref={messagesContainerSetter}
        isEmpty={messages.length === 0}
      >
        {messages.length === 0 ? (
          <div className="empty-state">
            <h3>Глобальный ИИ-чат</h3>
            <p>Задайте вопрос и получите мгновенный ответ.</p>
            <ul>
              <li>Поиск по сайту</li>
              <li>Подбор уроков для обучения</li>
              <li>Помощь в составлении стратегии обучения</li>
              <li>Оценка вашего прогресса</li>
              <li>Актуализация навыков и резюме</li>
            </ul>
          </div>
        ) : (
          messages.map((msg, index) => (
            <ChatMessageStyled
              key={index}
              isUser={msg.CreatedBy?.id === user?.id}
            >
              <div className="message-content">{msg.contentText}</div>
            </ChatMessageStyled>
          ))
        )}
      </ChatMessagesStyled>

      {error && (
        <ErrorMessageStyled>
          {error?.message}
          <button
            className="close-button"
            onClick={handleErrorReset}
            title="Закрыть"
          >
            ✕
          </button>
        </ErrorMessageStyled>
      )}
      <ChatInputContainerStyled>
        <ChatInputStyled
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Введите ваше сообщение..."
        />
        <SendButtonStyled
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || inRequest}
          type="submit"
          $inRequest={inRequest}
        >
          Отправить
        </SendButtonStyled>
      </ChatInputContainerStyled>
    </MainPageChatMessagesStyled>
  )
}
