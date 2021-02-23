import React from 'react'

import { OfficeContextValue } from './interfaces'

export * from './interfaces'

const OfficeContext = React.createContext<OfficeContextValue | null>(null)

export default OfficeContext
