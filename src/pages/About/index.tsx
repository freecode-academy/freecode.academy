import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React from 'react'
import { Page } from '../_App/interfaces'

/**
 * Страница О проекте
 */
export const AboutPage: Page = () => {
  return (
    <>
      <NextSeo
        title="О проекте / Контакты"
        description="О проекте FreeCode.Academy"
      />

      <div>
        <h3>Добро пожаловать на сайт FreeCode.Academy!</h3>

        <p>
          Здесь любой желающий может совершенно бесплатно изучить HTML, CSS,
          JavaScript, React, Next-JS и прочие технологии, а так же пообщаться с
          другими специалистами как начинающими, так и с опытными.
        </p>

        <p>
          Специальная страничка{' '}
          <Link href="/start/developers">
            <a title="С чего начать изучать веб-программирование">
              С чего начать изучать веб-программирование
            </a>
          </Link>{' '}
          поможет вам сделать свои первые шаги.
        </p>

        <p>
          А для тех, кто привык оперативно общаться в Телеграм, я завел{' '}
          <a href="https://t.me/freecode_academy">свою группу</a>.
          Присоединяйтесь;-)
          <br />
          Правда канал еще совсем свежий и участников совсем мало, но вы не
          стесняйтесь, пишите. Я там тоже есть и оперативно отвечу на любой
          разумный вопрос.
        </p>

        <p>
          Любые вопросы/предложения можно слать на почту{' '}
          <a href="mailto:info@freecode.academy">info@freecode.academy</a>
        </p>
      </div>
    </>
  )
}
