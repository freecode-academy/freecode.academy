import { NextRouter, useRouter } from 'next/router'
import { ChangeEvent, useCallback, useMemo } from 'react'
import { NextPageContextCustom } from 'src/pages/_App/interfaces'

export const getUsersParamsFromUrl = (
  router: NextRouter | NextPageContextCustom
) => {
  const search =
    typeof router.query.search === 'string' ? router.query.search : undefined

  return {
    search,
  }
}

/**
 * Чтение и обновление фильтров
 */
export const useUsersFilters = () => {
  const router = useRouter()

  /**
   * Здесь я просто поэкспериментировал с новыми объектами и методами,
   * но в целом все можно сделать проще через
   * delete router.query.page
   * router.query[name] = value;
   * router.push(router);
   */
  const urlParams = useMemo(() => {
    const urlParams = new URLSearchParams()

    Object.keys(router.query).forEach((key) => {
      const value = router.query[key]

      if (value === undefined) {
        return
      } else if (typeof value === 'string') {
        urlParams.append(key, value)
      } else if (Array.isArray(value)) {
        value.forEach((v) => {
          urlParams.append(key, v)
        })
      }
    })

    return urlParams
  }, [router.query])

  const updateUrl = useCallback(
    (key: string, value: string | undefined) => {
      urlParams.delete('page')

      if (value === undefined) {
        urlParams.delete(key)
      } else {
        urlParams.append(key, value)
      }

      const query = Object.fromEntries(urlParams)

      router.query = query

      router.push(router)
    },
    [router, urlParams]
  )

  const clear = useCallback(() => {
    router.query = {}

    router.push(router)
  }, [router])

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name
      const value = event.target.value

      updateUrl(name, value)
    },
    [updateUrl]
  )

  const filters = getUsersParamsFromUrl(router)

  return useMemo(() => {
    return {
      filters,
      onChange,
      clear,
    }
  }, [filters, onChange, clear])
}
