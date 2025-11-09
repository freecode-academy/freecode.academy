/* eslint-disable no-console */
import { FieldResolver } from 'nexus'
import { exec } from 'child_process'
import { promisify } from 'util'
import { decode } from 'jsonwebtoken'
import { N8nTrainerContainerAthMap } from '../interfaces'
import { resolve } from 'path'

const execAsync = promisify(exec)

export const n8nTrainerContainerCreateAuthResolver: FieldResolver<
  'Mutation',
  'n8nTrainerContainerCreateAuth'
> = async (_, { data }, { currentUser, prisma }) => {
  if (!currentUser) {
    throw new Error('Not authorized')
  }

  const { lesson, email } = data

  let user = currentUser

  if (!currentUser.email) {
    if (email) {
      user = await prisma.user.update({
        data: {
          email,
        },
        where: {
          id: currentUser.id,
        },
      })
    }
  }

  const userEmail = email || user.email

  if (!userEmail) {
    throw new Error('email required')
  }

  const { id: userId, fullname } = user

  // Генерируем случайный пароль
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const digits = '0123456789'
  const special = '!^*'
  const allChars = uppercase + lowercase + digits + special

  let password = ''
  // Гарантируем наличие хотя бы одного символа каждого типа
  password += uppercase[Math.floor(Math.random() * uppercase.length)]
  password += lowercase[Math.floor(Math.random() * lowercase.length)]
  password += digits[Math.floor(Math.random() * digits.length)]
  password += special[Math.floor(Math.random() * special.length)]

  // Добавляем остальные случайные символы
  for (let i = 0; i < 12; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)]
  }

  // Перемешиваем символы
  password = password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('')

  // Формируем имя контейнера
  const containerName = `n8n-trainer-${userId}-${lesson}`

  // Разделяем fullname на firstName и lastName
  const nameParts = (fullname || 'User').split(' ')
  const firstName = nameParts[0] || 'User'
  const lastName = nameParts.slice(1).join(' ') || 'User'

  try {
    // Путь к скрипту создания пользователя
    const scriptPath = resolve(__dirname, '../', 'scripts/setup-user-auth.sh')

    // Экранируем аргументы для безопасности (кроме пароля - он передается через stdin)
    const escapedFirstName = firstName
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\$/g, '\\$')
      .replace(/`/g, '\\`')
    const escapedLastName = lastName
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\$/g, '\\$')
      .replace(/`/g, '\\`')

    // Формируем команду (пароль передается через stdin для безопасности)
    const command = `echo "${password}" | bash ${scriptPath} "${containerName}" "${email}" "${escapedFirstName}" "${escapedLastName}"`

    console.log(`Setting up user auth for container: ${containerName}`)

    // Выполняем команду
    const { stdout, stderr } = await execAsync(command)

    if (stderr && !stderr.includes('✅')) {
      console.error('Script stderr:', stderr)
    }

    console.log('Script output:', stdout)

    // Последняя строка вывода содержит токен
    const lines = stdout.trim().split('\n')
    const token = lines[lines.length - 1].trim()

    if (!token || token.includes('Error') || token.includes('Failed')) {
      throw new Error('Failed to get auth token from script')
    }

    console.log('Authentication successful, token received')

    const decoded = decode(token)

    console.log('decoded', decoded)

    if (!decoded || typeof decoded === 'string') {
      throw new Error('Invalid response')
    }

    const { id: browserId } = decoded

    N8nTrainerContainerAthMap.set(browserId, token)

    return {
      browserId,
    }
  } catch (error) {
    console.error('Error in n8nTrainerContainerCreateAuth:', error)
    throw error
  }
}
