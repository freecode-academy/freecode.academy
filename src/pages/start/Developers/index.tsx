import React from 'react'
import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'
import { DevelopersStartPageStyled } from './styles'
import Typography from 'material-ui/Typography'
import Link from 'next/link'

/**
 * Стартовая страница Программистам
 */
const DevelopersStartPage: Page = () => {
  return (
    <>
      <NextSeo title="С чего начать программистам" />

      <DevelopersStartPageStyled>
        <Typography
          variant="title"
          // className="title"
          paragraph
        >
          С чего начать изучать веб-программирование.
        </Typography>

        <Typography paragraph>
          Если вы решили изучить веб-программирование, мы попытаемся вам в этом
          помочь. Для этого разрабатывается и внедряется сразу несколько
          инструментов.
        </Typography>

        <Typography variant="subheading" paragraph>
          1. Тестовые{' '}
          <Link href="/learn/sections">
            <a title="">онлайн-задания</a>
          </Link>
          .
        </Typography>

        <Typography paragraph>
          Данный раздел подходит для самостоятельного последовательного изучения
          основам веб-разработки. Рекомендуется следующая последовательность в
          изучении:
        </Typography>

        <Typography>
          Для начала освоить
          <ul>
            <li>
              <Link href="/learn/sections/ck4h36qjt0hoq0782jj6hbcni">
                <a title="Онлайн-уроки Basic HTML And HTML5">
                  Basic HTML And HTML5
                </a>
              </Link>
            </li>
            <li>
              <Link href="/learn/sections/ck4h36qjt0hor0782m410lvse">
                <a title="Онлайн-уроки Basic CSS">Basic CSS</a>
              </Link>
            </li>
            <li>
              <Link href="/learn/sections/ck4h36qju0hp007829wpno3v1">
                <a title="Онлайн-уроки Basic JavaScript">Basic JavaScript</a>
              </Link>
            </li>
            <li>
              <Link href="/learn/sections/ck4h36qju0hoy0782vykvhkz3">
                <a title="Онлайн-уроки ES6">ES6</a>
              </Link>
            </li>
            <li>
              <Link href="/learn/sections/ck4h36qjs0hob07829yk84yu7">
                <a title="Онлайн-уроки React">React</a>
              </Link>
            </li>
          </ul>
          При чем лучше не последовательно полностью по курсу, а в первый день{' '}
          <Link href="/technologies/ck1fasxk228gk0a89k3vnmroa">
            <a title="HTML">HTML</a>
          </Link>{' '}
          и{' '}
          <Link href="/technologies/ck1fatvnc28jj0a89oymmo65i">
            <a title="CSS">CSS</a>
          </Link>
          , во второй{' '}
          <Link href="/technologies/ck1faudv928l40a89c4u9zxlm">
            <a title="JavaScript">JavaScript</a>
          </Link>
          , в третий{' '}
          <Link href="/technologies/ck1fawbdw28v20a891k4wlh27">
            <a title="React">React</a>
          </Link>
          , и далее по кругу. Реакт будет на первых парах сложен в восприятии,
          поэтому его можно в начале поменьше. Чувствуете, что ничего не
          понимаете - переключайтесь опять на HTML/CSS/JS. Все потому что Реакт,
          по сути, это JS+HTML - Переменные, свойства которых являются
          HTML-разметкой (очень условно, но близко к сути).
        </Typography>

        <Typography paragraph>
          В каждом уроке есть вкладка Обсудить. Если вы зашли в нее и там нет
          еще ни одного сообщения, не стесняйтесь, смело пишите туда любые
          вопросы. Смысл данных уроков не в том, чтобы протестировать что вы
          умеете, а что нет (хотя и это тоже), а в том, чтобы вы научились
          чему-то новому, так что если что-то не ясно, обязательно спрашивайте.
          Все обсуждения попадают в общий блог{' '}
          <Link href="/blogs/uroki">
            <a title="Все публикации в блоге Уроки">Уроки</a>
          </Link>
          .
        </Typography>

        <Typography variant="subheading" paragraph>
          2. Тестовые проекты участников проекта.
        </Typography>

        <Typography paragraph>
          Если вы хотите закрепить свои знания на практике, здесь можно создать
          публичный проект или присоединиться к уже существующему. Вот{' '}
          <Link href="/projects/uchebnyy-proekt-na-next-js.-pokemony.">
            <a title="">пример такого проекта</a>
          </Link>
          .
        </Typography>

        <Typography paragraph>
          В рамках проекта создаются отдельные задачи и обсуждаются решения с
          публикацией кода в гитхаб. Вот{' '}
          <Link href="/tasks/ckkzgb01fwmn00730jcb8ngyf">
            <a title="">одна из таких задач</a>
          </Link>
        </Typography>

        <Typography paragraph>
          Вы можете сделать клон проекта, посмотреть какие задачи стояли и как
          решались, постараться решить их самостоятельно и в случае чего задать
          вопросы.
        </Typography>

        <Typography variant="subheading" paragraph>
          3.{' '}
          <Link href="/technologies">
            <a title="">Справочник технологий</a>
          </Link>
          .
        </Typography>

        <Typography paragraph>
          Укажите какие технологии вы изучаете и самостоятельно актуализируйте
          статусы и уровни владения технологиями. В дальнейшем вы можете найти{' '}
          <Link href="/tasks?status_in=New&status_in=Accepted&status_in=Progress&status_in=Paused&status_in=RevisionsRequired&status_in=Discuss&status_in=Approved&status_in=Done">
            <a title="">задачи</a>
          </Link>
          , в которых указаны списки и уровни требуемых технологий. Таким
          образом вам будет проще подобрать задачи под себя, а потенциальному
          заказчику выбрать вас среди прочих претендентов.
        </Typography>

        <Typography variant="subheading" paragraph>
          4. Создавайте свои проекты и задачи в них с пометкой "Нужна помощь".
        </Typography>

        <Typography paragraph>
          Задачи с пометкой "Нужна помощь" выводятся в{' '}
          <Link href="/tasks?needHelp=true&status_in=New&status_in=Accepted&status_in=Progress&status_in=Paused&status_in=RevisionsRequired&status_in=Discuss&status_in=Approved&status_in=Done">
            <a title="">отдельный список</a>
          </Link>{' '}
          и помогают привлечь других участников сообщества к более оперативному
          решению. При чем в каждой задаче тоже есть функция обсуждения, так что
          многие моменты можно обсуждать сразу на месте.
        </Typography>

        <Typography paragraph>
          В любой другой непонятной ситуации не стесняйтесь,{' '}
          <Link href="/add-topic.html">
            <a title="">пишите публикации</a>
          </Link>
          , задавайте вопросы, предлагайте идеи.
        </Typography>
      </DevelopersStartPageStyled>
    </>
  )
}

export default DevelopersStartPage
