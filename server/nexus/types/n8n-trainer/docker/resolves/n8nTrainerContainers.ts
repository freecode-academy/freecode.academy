/* eslint-disable no-console */
import { FieldResolver } from 'nexus'
import http from 'http'

export const n8nTrainerContainersResolver: FieldResolver<
  'Query',
  'n8nTrainerContainers'
> = async (_root, _args, ctx) => {
  const { currentUser } = ctx

  if (!currentUser) {
    throw new Error('Not authorized')
  }

  const { id: currentUserId } = currentUser

  try {
    // Запрос к Docker API через Unix socket
    const containers = await getDockerContainers()

    // Фильтруем только контейнеры n8n-trainer по label app.type
    const trainerContainers: {
      name: string
      lesson: string
      status: string
      userId: string | undefined
    }[] = containers
      .filter(
        (container: any) =>
          container.Labels && container.Labels['app.type'] === 'n8n-trainer'
      )
      .map((container: any) => {
        console.log('container', container)

        return {
          name: container.Names[0].replace(/^\//, ''), // Убираем начальный слеш
          lesson: container.Labels['app.lesson'],
          userId: container.Labels['app.user_id'],
          status: container.Status,
        }
      })
      .filter((n) => n.userId === currentUserId)

    console.log('trainerContainers', trainerContainers)

    return trainerContainers
  } catch (error) {
    console.error('Error fetching Docker containers:', error)
    return []
  }
}

// Функция для получения списка контейнеров через Docker socket
function getDockerContainers(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const options = {
      socketPath: '/var/run/docker.sock',
      path: '/containers/json?all=true', // all=true показывает и остановленные
      method: 'GET',
    }

    const req = http.request(options, (res) => {
      let data = ''

      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        try {
          const containers = JSON.parse(data)
          resolve(containers)
        } catch (error) {
          reject(new Error('Failed to parse Docker API response'))
        }
      })
    })

    req.on('error', (error) => {
      reject(error)
    })

    req.end()
  })
}
