import { useEffect } from 'react'
import { UserFragment } from 'src/gql/generated'

type useHeapIoProps = {
  heapId: string | undefined
  user: UserFragment | null | undefined
}

export function useHeapIo({ heapId, user }: useHeapIoProps) {
  useEffect(() => {
    if (!heapId) {
      return
    }

    window.heapReadyCb = window.heapReadyCb || []

    const methods = [
      'init',
      'startTracking',
      'stopTracking',
      'track',
      'resetIdentity',
      'identify',
      'getSessionId',
      'getUserId',
      'getIdentity',
      'addUserProperties',
      'addEventProperties',
      'removeEventProperty',
      'clearEventProperties',
      'addAccountProperties',
      'addAdapter',
      'addTransformer',
      'addTransformerFn',
      'onReady',
      'addPageviewProperties',
      'removePageviewProperty',
      'clearPageviewProperties',
      'trackPageview',
    ]

    const createMethod = (name: string) => {
      return function (...args: unknown[]) {
        window.heapReadyCb?.push({
          name,
          fn: function () {
            const h = window.heap
            const method = (h as Record<string, unknown>)[name]
            if (h && typeof method === 'function') {
              ;(method as (...a: unknown[]) => void)(...args)
            }
          },
        })
      }
    }

    const heap: HeapAnalytics = {
      load: function (envId: string, clientConfig?: Record<string, unknown>) {
        heap.envId = envId
        heap.clientConfig = (clientConfig ||
          {}) as HeapAnalytics['clientConfig']
        if (heap.clientConfig) {
          heap.clientConfig.shouldFetchServerConfig = false
        }

        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src = `https://cdn.us.heap-api.com/config/${envId}/heap_config.js`

        const firstScript = document.getElementsByTagName('script')[0]
        firstScript.parentNode?.insertBefore(script, firstScript)

        for (const method of methods) {
          ;(heap as Record<string, unknown>)[method] = createMethod(method)
        }
      },
    }

    window.heap = heap
    heap.load(heapId)

    return () => {
      if (!window.heap) {
        return
      }

      const h = window.heap
      if (h && !Array.isArray(h)) {
        h.stopTracking?.()
      }
      delete window.heap
      window.heapReadyCb = undefined
    }
  }, [heapId])

  useEffect(() => {
    const heap = window.heap

    if (user && heap) {
      heap.addUserProperties?.({
        Name: user.fullname || user.username || user.id,
      })
    }
  }, [user])
}
