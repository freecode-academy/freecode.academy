import { FieldResolver } from 'nexus'
import { ChatCompletionMessageParam } from 'openai/resources/index'
import { getAiUser } from '../../../../openaiClient/helpers/getAiUser'
import { sendAiMessage } from '../helpers/sendAiMessage'
import { createMessage } from '../helpers/createMessage'

export const sendAiMessageResolver: FieldResolver<
  'Mutation',
  'sendAiMessage'
> = async (_, args, ctx) => {
  const { id, text, withHistory } = args.data

  const { currentUser } = ctx

  if (!currentUser) {
    throw new Error('Not authorized')
  }

  const fromUser = currentUser

  // const message = coords
  //   ? `${text}

  // ------------
  // Мои координаты: ${JSON.stringify(coords)}
  // `
  //   : text

  const toUser = await getAiUser({ ctx })

  const message = await createMessage({
    ctx,
    fromUser,
    toUser,
    text,
    id: id ?? undefined,
  })

  const messages: ChatCompletionMessageParam[] = []

  const aiMessage: ChatCompletionMessageParam = {
    role: 'user',
    content: message.text,
    name: fromUser.fullname ?? undefined,
  }

  messages.push({
    role: 'system',
    content: `id сообщения пользователя (messageId): ${message.id}`,
  })

  messages.push(aiMessage)

  /**
   * Отправляем параллельно, чтобы не ждать ответа агента.
   * То отправит параллельно через веб-сокет
   */
  return await sendAiMessage({
    ctx,
    fromUser: currentUser,
    withHistory,
    messages,
    toUser,
  })
}
