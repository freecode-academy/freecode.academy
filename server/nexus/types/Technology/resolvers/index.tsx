import { NexusGenInputs } from 'server/nexus/generated/nexus'

export function validateTechnology(
  data:
    | NexusGenInputs['TechnologyCreateInput']
    | NexusGenInputs['TechnologyUpdateInput']
) {
  if (data.name !== undefined) {
    if (!data.name) {
      throw new Error('Не заполнено название')
    }
  }

  return data
}
