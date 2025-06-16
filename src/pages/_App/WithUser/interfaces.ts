import { PrismaCmsContext } from '@prisma-cms/context'
import React from 'react'
import { AppContextValue } from 'src/AppContext'

export type WithUserProps = React.PropsWithChildren<{
  // client: PrismaCmsContext["client"];

  context: PrismaCmsContext

  loginComplete: AppContextValue['loginComplete']
}>
