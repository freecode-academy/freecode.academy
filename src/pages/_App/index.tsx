import React, { useCallback, useEffect, useMemo, useState } from 'react'
import NextApp, { AppContext } from 'next/app'
import { useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import theme from 'src/theme'
import {
  AppInitialProps,
  PageProps,
  MainApp,
  NextPageContextCustom,
  AppProps,
} from './interfaces'

import { useApollo, initializeApollo } from 'src/lib/apolloClient'
import { getSubscriptionClient } from 'src/lib/apolloClient/createApolloClient'

import Context, { PrismaCmsContext } from '@prisma-cms/context'
import URI from 'urijs'
import * as yup from 'yup'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { getMuiTheme } from './MUI/theme'

import Auth from 'src/components/Auth'
import WithUser from './WithUser'
import { AuthFormResponse } from '../../components/Auth/forms/interfaces'

import moment from 'moment'
import Page404 from '../_Error/404'
import ErrorPage from '../_Error'
import { NextSeo, NextSeoProps } from 'next-seo'
import Head from 'next/head'
// import Pagination from '../../components/Pagination'
import UserLink from '../../uikit/Link/User'
import ProjectLink from '../../uikit/Link/Project'
import Link from '../../uikit/Link'
// import Editor from '../../uikit/Editor'

// TODO: Проработать локализацию
moment.locale('ru')
import { GlobalStyle } from 'src/theme/GlobalStyle'
import OfficeLayout from './layouts/OfficeLayout'
import MainLayout from './layouts/MainLayout'

// TODO Restore WebSockets
const withWs = false

// const App: MainApp = ({ Component, pageProps }) => {
//   // eslint-disable-next-line no-console
//   // console.log('App props', props);

yup.setLocale({
  mixed: {
    default: 'Ошибка заполнения',
    required: 'Обязательное поле',
  },
  string: {
    email: 'Введите корректный емейл',
  },
})

const App: MainApp<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState, withWs)

  const { statusCode, layout } = pageProps

  const router = useRouter()

  useEffect(() => {
    if (global.document) {
      const muiSsrStyles = global.document.querySelector('#server-side-jss')

      if (muiSsrStyles) {
        muiSsrStyles.remove()
      }
    }
  }, [])

  const [authOpen, setOpened] = useState(false)

  /**
   * Сбрасываем кеш аполло-клиента на авторизацию и деавторизацию
   */
  const resetConnection = useCallback(
    async (token: string | null) => {
      if (token) {
        global.localStorage.setItem('token', token)
      } else {
        global.localStorage.removeItem('token')
      }

      /**
       * Переподключаем веб-сокет
       */
      const subscriptionClient = getSubscriptionClient(withWs)

      try {
        subscriptionClient?.close(false, false)
      } catch (error) {
        console.error(error)
      }

      await apolloClient.resetStore().catch(console.error)
    },
    [apolloClient]
  )

  const loginComplete = useCallback(
    async (data: AuthFormResponse) => {
      const { token } = data
      await resetConnection(token)
    },
    [resetConnection]
  )

  const loginCanceled = useCallback(() => {
    setOpened(false)
  }, [setOpened])

  const logout = useCallback(async () => {
    await resetConnection(null)
  }, [resetConnection])

  /**
   * Открываем форму для авторизации
   */
  const openLoginForm = useCallback(() => {
    setOpened(true)
  }, [setOpened])

  const content = useMemo(() => {
    const meta: NextSeoProps = {}

    let content = null

    /**
     * Если получили серверную ошибку, выводим страницу ошибки
     */
    if (statusCode && statusCode !== 200) {
      switch (statusCode) {
        case 404:
          meta.noindex = true
          meta.nofollow = true

          content = <Page404 />

          break

        default:
          content = <ErrorPage statusCode={statusCode} />
      }
    } else {
      content = <Component {...pageProps} />
    }

    return (
      <>
        <NextSeo {...meta} />
        {content}
      </>
    )
  }, [statusCode, pageProps, Component])

  /**
   * Оборачиваем контент в шаблон
   */
  const { contentWithLayout, muiTheme } = useMemo(() => {
    switch (layout?.variant) {
      case 'office':
        return {
          contentWithLayout: <OfficeLayout>{content}</OfficeLayout>,
          muiTheme: getMuiTheme({
            palette: {
              // В офисе используется темная тема
              type: 'dark',
            },
          }),
        }

      default:
        return {
          contentWithLayout: <MainLayout layout={layout}>{content}</MainLayout>,
          muiTheme: getMuiTheme({}),
        }
    }
  }, [content, layout])

  const contextValue = useMemo(() => {
    const context: PrismaCmsContext = {
      uri: new URI(),
      client: apolloClient,
      router,
      logout,
      openLoginForm,
      lang: 'ru',
      theme: muiTheme,
      localStorage: global.localStorage,
      apiClientResetStore: async function () {
        if (!apolloClient['queryManager'].fetchCancelFns.size) {
          return apolloClient.resetStore().catch(console.error)
        }
      },

      /**
       * @prisma-cms/front-editor
       */
      // Pagination,
      UserLink,
      // Editor,
      ProjectLink,
      Link,
    }

    return context
  }, [apolloClient, logout, muiTheme, openLoginForm, router])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <MuiThemeProvider
        theme={muiTheme}
        // For SSR only
        sheetsManager={
          typeof global.window === 'undefined' ? new Map() : undefined
        }
      >
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ApolloProvider client={apolloClient}>
            <Context.Provider value={contextValue}>
              <WithUser context={contextValue}>
                <Auth
                  open={authOpen}
                  // TODO Restore metamask
                  useMetamask={false}
                  loginComplete={loginComplete}
                  loginCanceled={loginCanceled}
                  showRegForm={true}
                />
                {contentWithLayout}
              </WithUser>
            </Context.Provider>
          </ApolloProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}

App.getInitialProps = async (appContext: AppContext) => {
  /**
   * В родном контексте неправильная типизация
   */
  // const req = appContext.ctx.req as Request;

  // const lang = req.acceptsLanguages('ru', 'en');

  // if (lang) {
  //   moment.locale(lang);
  // }

  /**
   * Для того, чтобы в итоге можно было собрать общий аполло-стейт
   * с приложения и далее выполняемый страниц и документа,
   * передаем аполло-клиент далее в контекст приложения.
   */
  const apolloClient = initializeApollo({
    withWs,
    appContext,
  })

  /**
   * Передаваемый далее в страницу контекст
   */
  const ctx: NextPageContextCustom = {
    ...appContext.ctx,
    apolloClient,
  }

  const newAppContext = {
    ...appContext,
    ctx,
  }

  /**
   * Здесь вызывается page.getInitialProps() и далее _document.getInitialProps()
   * Все собирается в конечный appProps
   */

  const { pageProps, ...otherProps } = await NextApp.getInitialProps(
    newAppContext
  )

  const { statusCode } = pageProps as PageProps

  /**
   * Если выполняется на серверной стороне
   */
  if (statusCode && newAppContext.ctx.res) {
    newAppContext.ctx.res.statusCode = statusCode
  }

  const newProps: AppInitialProps = {
    ...otherProps,
    pageProps: {
      ...pageProps,
      statusCode,
      initialApolloState: apolloClient.cache.extract(),
    },
  }

  return newProps
}

export default App
