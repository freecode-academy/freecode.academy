import { PrismaCmsContext } from '@prisma-cms/context'
import React from 'react'

export type WithUserProps = React.PropsWithChildren<{
  // client: PrismaCmsContext["client"];

  context: PrismaCmsContext
}>
