import { useContext } from 'react'
// import { Context } from 'src/pages/_App/Context'
import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'

/**
 * Get current authorized user
 */
export const useCurrentUser = () => {
  // const context = useContext(Context)
  const context = useContext(PrismaContext) as PrismaCmsContext

  return context?.user
}
