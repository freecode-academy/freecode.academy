import { User, PrismaClient, Token } from '@prisma/client'
// import { Knex } from 'knex'
import fs from 'fs'
import { Sendmail, SendmailProps } from '../../modules/Mailer/sendmail'
// import { ExpressContext } from 'apollo-server-express'
// import { knexClient } from '../knex'
import { PubSub } from 'graphql-subscriptions'
import { ExpressContextFunctionArgument } from '@apollo/server/dist/esm/express4'
import { pubsub, PubSubInterface } from '../../PubSub'
import { prismaClient } from '../../prismaClient'

export interface PrismaContext {
  prisma: PrismaClient
  req:
    | ExpressContextFunctionArgument['req']
    | { headers: { authorization: string | undefined } }
    | undefined
  // knex: Knex
  sendmail: ReturnType<typeof Sendmail> | undefined
  mailSender: string
  APP_SECRET: string
  pubsub: PubSub<PubSubInterface>

  // Authorized user
  currentUser: User | null

  /**
   * Токен авторизации
   */
  Token: (Token & { User: User | null }) | null
}

if (!process.env.APP_SECRET) {
  throw new Error('APP_SECRET env is not defined')
}

const APP_SECRET = process.env.APP_SECRET

/**
 * Sendmail
 */

let sendmail: PrismaContext['sendmail']

if (process.env.Sendmail === 'true') {
  const sendmailProps: SendmailProps = {
    silent: process.env.NODE_ENV !== 'development',
  }

  /**
   * prod
   */
  if (process.env.SendmailSmtpHost) {
    sendmailProps.smtpHost = process.env.SendmailSmtpHost
  }

  if (process.env.SendmailSmtpPort) {
    sendmailProps.smtpPort = parseInt(process.env.SendmailSmtpPort)
  }

  /**
   * dev
   */
  if (process.env.SendmailDevHost) {
    sendmailProps.devHost = process.env.SendmailDevHost
  }

  if (process.env.SendmailDevPort) {
    sendmailProps.devPort = parseInt(process.env.SendmailDevPort)
  }

  /**
   * DKIM
   */
  if (process.env.SendmailKeySelector && process.env.SendmailPrivateKeyFile) {
    sendmailProps.dkim = {
      keySelector: process.env.SendmailKeySelector,
      privateKey: fs.readFileSync(process.env.SendmailPrivateKeyFile, 'utf8'),
    }
  }

  sendmail = Sendmail(sendmailProps)
}

// TODO Move to createContext
export const context: PrismaContext = {
  prisma: prismaClient,
  // knex: knexClient,
  sendmail,
  mailSender: process.env.SendmailSender || 'no-reply@gorodskie-bani.ru',
  APP_SECRET,
  currentUser: null,
  Token: null,
  req: undefined,
  // Заглушка для PubSub, реальный экземпляр будет добавлен в graphqlServer/index.ts
  pubsub,
}
