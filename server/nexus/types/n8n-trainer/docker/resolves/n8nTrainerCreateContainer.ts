/* eslint-disable no-console */
import { FieldResolver } from 'nexus'
import { exec } from 'child_process'
import { promisify } from 'util'
import { resolve } from 'path'

const execAsync = promisify(exec)

export const n8nTrainerCreateContainerResolver: FieldResolver<
  'Mutation',
  'n8nTrainerCreateContainer'
> = async (_root, args, ctx) => {
  console.log('=== n8nTrainerCreateContainer START ===')
  console.log('Args:', args)

  const { currentUser } = ctx

  if (!currentUser) {
    console.error('ERROR: Not authorized - no currentUser')
    throw new Error('Not authorized')
  }

  const { id: userId } = currentUser
  console.log('User ID:', userId)

  const { lesson } = args
  console.log('Lesson:', lesson)

  // try {
  // Проверяем, существует ли уже контейнер для этого пользователя и урока
  const containerName = `n8n-trainer-${userId}-${lesson}`
  console.log('Container name:', containerName)

  const checkCommand = `docker ps -a --format '{{.Names}}' | grep -q "^${containerName}$" && echo "exists" || echo "not_exists"`
  console.log('Check command:', checkCommand)

  const { stdout: checkResult } = await execAsync(checkCommand)
  console.log('Check result:', checkResult.trim())

  if (checkResult.trim() === 'exists') {
    // return {
    //   success: false,
    //   message: 'Container already exists for this user and lesson',
    //   error: 'CONTAINER_EXISTS',
    //   existingContainer: {
    //     userId,
    //     lesson,
    //     containerName,
    //   },
    // }

    return {
      // userId,
      lesson,
      name: containerName,
      status: 'running',
    }
  }

  // Путь к скрипту создания контейнера
  console.log('--- Preparing script execution ---')

  const scriptPath = resolve(
    __dirname,
    '../',
    'scripts/create-trainer-container.sh'
  )

  console.log('scriptPath __dirname:', __dirname)
  console.log('scriptPath:', scriptPath)

  // Формируем команду с флагом --force для автоматического удаления
  const command = `bash ${scriptPath} ${userId} ${lesson} --force`

  console.log('Command to execute:', command)

  // Выполняем скрипт
  console.log('--- Executing script ---')
  try {
    const { stdout, stderr } = await execAsync(command)

    console.log('--- Script execution completed ---')

    if (stderr) {
      console.log('Script stderr:', stderr)
      if (!stderr.includes('✅')) {
        console.error('WARNING: stderr without success marker')
      }
    }

    console.log('Script stdout:', stdout)

    const result = {
      // userId,
      lesson,
      name: containerName,
      status: 'running',
    }

    console.log('=== n8nTrainerCreateContainer SUCCESS ===')
    console.log('Result:', result)

    // Ждем немного, пока контейнер заработает
    await new Promise((resolve) => {
      setTimeout(resolve, 10000)
    })

    return result
  } catch (error) {
    console.error('=== n8nTrainerCreateContainer ERROR ===')
    console.error('Error details:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    throw error
  }
}
