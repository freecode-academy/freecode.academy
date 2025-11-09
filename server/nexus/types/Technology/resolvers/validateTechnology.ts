import { NexusGenInputs } from 'server/nexus/generated/nexus'

// TODO Разобраться в правильном подключении зависимости
// Сейчас, если подгружать сразу из ./createTechnology.ts и ./updateTechnology.ts
// Не запускает прод

export const validateTechnology = (
  data:
    | NexusGenInputs['TechnologyCreateInput']
    | NexusGenInputs['TechnologyUpdateInput']
) => {
  if (data.name !== undefined) {
    if (!data.name) {
      throw new Error('Не заполнено название')
    }
  }

  return data
}
