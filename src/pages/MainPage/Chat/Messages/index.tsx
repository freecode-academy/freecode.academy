import dynamic from 'next/dynamic'
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  DialogDocument,
  useCreateChatMessageProcessorMutation,
  useDialogQuery,
} from 'src/gql/generated'
import { useAppContext } from 'src/pages/_App/Context'

import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'

const MainPageChatMessage = dynamic(
  // @ts-expect-error Видимо пройдет после обновления некста
  () => import('./Message').then((m) => m.MainPageChatMessage),
  { ssr: false }
)

import {
  MainPageChatMessagesStyled,
  ChatInputStyled,
  ChatMessagesStyled,
  NonAuthNoticeStyled,
  ChatInputContainerStyled,
  SendButtonStyled,
  ErrorMessageStyled,
  AuthLinkStyled,
} from './styles'

import SendIcon from 'material-ui-icons/Send'
import CircularProgress from 'material-ui/Progress/CircularProgress'
import { useConfig } from 'src/hooks/useConfig'

type MainPageChatMessagesProps = {
  //
}

export const MainPageChatMessages: React.FC<MainPageChatMessagesProps> = (
  ...other
) => {
  const { openLoginForm } =
    (useContext(PrismaContext) as PrismaCmsContext | null) || {}

  const context = useAppContext()

  const { user, onAuthSuccess } = context || {}

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

  const [messagesContainer, messagesContainerSetter] =
    useState<HTMLDivElement | null>(null)

  const [createChatMessage, { loading: inRequest }] =
    useCreateChatMessageProcessorMutation({
      refetchQueries: [DialogDocument],
    })

  // const isAnonymous = !user

  const [inputValue, setInputValue] = useState('')

  const { MAIN_AI_AGENT_USERNAME } = useConfig()

  if (!MAIN_AI_AGENT_USERNAME) {
    errorSetter(new Error('MAIN_AI_AGENT_USERNAME is empty'))
  }

  const handleSendMessage = useCallback(() => {
    setInputValue((text) => {
      createChatMessage({
        variables: {
          data: {
            content: text,
            toUser: {
              username: MAIN_AI_AGENT_USERNAME,
            },
          },
        },
      })
        .then((r) => {
          if (r.data?.response) {
            const { success, message, data, createdUser } = r.data.response

            if (!success || !data) {
              errorSetter(new Error(message || 'Something went wrong'))

              return
            } else {
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
  }, [MAIN_AI_AGENT_USERNAME, createChatMessage, onAuthSuccess])

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

  useEffect(() => {
    if (!messagesContainer || !messages.length) {
      return
    }

    // Плавная прокрутка до последнего сообщения с задержкой
    const scrollTimeout = setTimeout(() => {
      messagesContainer.scrollTo({
        top: messagesContainer.scrollHeight,
        behavior: 'smooth',
      })
    }, 500) // Задержка в 1 секунду

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(scrollTimeout)
  }, [messages, messagesContainer])

  return (
    <MainPageChatMessagesStyled {...other}>
      <ChatMessagesStyled
        ref={messagesContainerSetter}
        isEmpty={messages.length === 0}
      >
        {messages.length === 0 ? (
          <div className="empty-state">
            {/* <h3>Глобальный ИИ-чат</h3> */}
            <p>Привет!</p>

            <p>
              У нас тут маленький эксперимент: мы решили типа-ИИ чат воткнуть. В
              нем пока почти ничего нет, но он будет развиваться. В планах много
              интересного:
            </p>
            <ul>
              <li>Помощь в составлении стратегии обучения</li>
              <li>Подбор задачек под твой уровень, а не просто пачкой</li>
              <li>Оценка вашего прогресса</li>
              <li>Актуализация навыков и резюме</li>
              <li>Интеллектуальный поиск по уже имеющейся базе знаний</li>
              <li>И многое другое</li>
            </ul>

            <p>
              А если ты нам расскажешь что искал, что не нашел и что хотел бы
              тут видеть и в каком виде, то нам проще будет понять что делать в
              первую очередь. Писать можно прям сюда в свободной форме, это
              никуда не потеряется. Если надо дать ответ по какому-то
              конкретному каналу, можно так же в сообщении указать.
            </p>

            {!user && (
              <NonAuthNoticeStyled>
                <p>
                  Если у тебя уже есть аккаунт, лучше{' '}
                  <AuthLinkStyled onClick={openLoginForm}>
                    авторизоваться
                  </AuthLinkStyled>
                  . Но если нет, то можно писать и так. В этом случае будет
                  создан анонимный пользователь, чтобы не потерять переписку. Но
                  это все-таки полноценный пользователь, так что с ним можно
                  будет и пойти уроки проходить и все остальное, а данные свои
                  можно будет указать позже.
                </p>
              </NonAuthNoticeStyled>
            )}
          </div>
        ) : (
          messages.map((n) => (
            <MainPageChatMessage key={n.id} message={n} currentUser={user} />
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
          disabled={inRequest}
        />
        <SendButtonStyled
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || inRequest}
          type="submit"
          $inRequest={inRequest}
        >
          {inRequest ? <CircularProgress size={24} /> : <SendIcon />}
        </SendButtonStyled>
      </ChatInputContainerStyled>
    </MainPageChatMessagesStyled>
  )
}
