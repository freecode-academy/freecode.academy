interface Window {
  // Heap Analytics
  heap: HeapAnalytics | undefined
  heapReadyCb?: HeapReadyCallback[]
}

interface HeapReadyCallback {
  name: string
  fn: () => void
}

interface HeapAnalytics {
  [key: string]: unknown
  envId?: string
  clientConfig?: {
    shouldFetchServerConfig?: boolean
  }
  load: (envId: string, clientConfig?: Record<string, unknown>) => void
  init?: () => void
  startTracking?: () => void
  stopTracking?: () => void
  track?: (event: string, properties?: Record<string, unknown>) => void
  resetIdentity?: () => void
  identify?: (identity: string) => void
  getSessionId?: () => string
  getUserId?: () => string
  getIdentity?: () => string
  addUserProperties?: (properties: Record<string, unknown>) => void
  addEventProperties?: (properties: Record<string, unknown>) => void
  removeEventProperty?: (property: string) => void
  clearEventProperties?: () => void
  addAccountProperties?: (properties: Record<string, unknown>) => void
  addAdapter?: (adapter: unknown) => void
  addTransformer?: (transformer: unknown) => void
  addTransformerFn?: (fn: unknown) => void
  onReady?: (callback: () => void) => void
  addPageviewProperties?: (properties: Record<string, unknown>) => void
  removePageviewProperty?: (property: string) => void
  clearPageviewProperties?: () => void
  trackPageview?: () => void
}
