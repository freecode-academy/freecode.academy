import { useCallback, useState } from 'react'
import { SendAiMessageInput, useSendAiMessageMutation } from 'src/gql/generated'
import { AppActions } from 'src/AppContext/reducer/interfaces'
import { useAppContext } from 'src/AppContext'
import { createId } from 'src/helpers/createId'

export function useChat() {
  const { user: currentUser, appState, appDispatch } = useAppContext()

  const { chatMessages } = appState

  const [text, textSetter] = useState('')

  const [sendMessageMutation, { loading }] = useSendAiMessageMutation()

  const sendChatMessage = useCallback(() => {
    // const text = chatText

    if (!currentUser) {
      console.error('Не был получен пользователь')
      return
    }

    textSetter((text) => {
      // Проверяем, что текст не пустой
      if (text) {
        const messageId = createId()

        const data: SendAiMessageInput = {
          text,
          withHistory: true,
          id: messageId,
        }

        appDispatch({
          type: AppActions.ChatAddMessage,
          message: {
            ...data,
            id: messageId,
            createdBy: currentUser.id,
            createdAt: new Date(),
          },
        })

        appDispatch({
          type: AppActions.ChatSetInRequest,
          chatInRequest: true,
        })

        // Делаем запрос на сервер
        sendMessageMutation({
          variables: {
            data,
          },
        })
          .then((r) => {
            const { sendAiMessage } = r.data || {}

            if (sendAiMessage) {
              // Когда получаем ответ, обновляем сообщения
              // appDispatch({
              //   type: AppActions.ReceiveChatResponse,
              //   response: sendAiMessage,
              // })

              // Отправляем сообщение (пока без ответа)
              appDispatch({
                type: AppActions.ChatAddMessage,
                message: sendAiMessage,
              })
            }
          })
          .catch((error) => {
            console.error('Error sending message:', error)
            // TODO Fix alert
            alert('Ошибка отправки сообщения')
          })
          .finally(() => {
            appDispatch({
              type: AppActions.ChatSetInRequest,
              chatInRequest: false,
            })
          })
      }

      return ''
    })
  }, [appDispatch, sendMessageMutation, currentUser])

  return {
    messages: chatMessages,
    loading,
    text,
    textSetter,
    sendChatMessage,
  }
}
