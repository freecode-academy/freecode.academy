import bcrypt from 'bcryptjs'
import { generateId } from '../../../../../helpers/generateId'

export const createPassword = async (password?: string | null | undefined) => {
  return await bcrypt.hash(password ?? generateId(), 10)
}
