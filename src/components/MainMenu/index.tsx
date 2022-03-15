import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
// import IconButton from 'material-ui/IconButton';

import Grid from 'src/uikit/Grid'

// import CreateIcon from 'material-ui-icons/Create';

// import UserItem from "@prisma-cms/front/lib/components/App/Renderer/MainMenu/User";
// import { styles as defaultStyles } from '@prisma-cms/front/lib/components/App/Renderer/MainMenu'
// import Language from '@prisma-cms/front/lib/components/Language'
// import UserItem from './User'
import UserLink from 'src/uikit/Link/User'

// import { Link } from 'react-router-dom'
import Link from 'next/link'

import PrismaCmsComponent from '@prisma-cms/component'
import { MainMenuProps, MainMenuState } from './interfaces'

// import { CallRequestButtons } from '@prisma-cms/webrtc'

// import { Timer } from '@prisma-cms/cooperation'

import Timer from './Timer'
// import MainMenuNotices from './Notices'
import { TaskStatus, TaskWhereInput } from 'src/modules/gql/generated'
import { TelegramIconSvg } from 'src/uikit/icons/telegram'

// export const defaultStyles = theme => {

//   const {
//     palette: {
//       type: paletteType,
//     },
//   } = theme;

//   return {
//     root: {

//       // Fix contrast
//       // "& a, & button": {
//       //   "&, & *": {
//       //     color: paletteType === "light" ? "#fff" : undefined,
//       //   },
//       // },
//     },
//   }
// }

/**
 * Формируем параметры для УРЛ
 */
export const prepareTasksFiltersUrl = (filter: TaskWhereInput) => {
  return encodeURIComponent(JSON.stringify(filter))
}

export const styles = (theme: any) => {
  const {
    palette: {
      background: { default: backgroundColor },
      type: paletteType,
    },
  } = theme

  return {
    // ...defaultStyles,
    root: {
      // flexGrow: 1,
      backgroundColor,
      position: 'relative',
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: 5,
      // marginRight: -12,
    },
    link: {
      color: paletteType === 'light' ? '#fff' : undefined,
    },
    iconButton: {
      height: 36,
      width: 36,
    },
  }
}

export const locales = {
  ru: {
    values: {
      Signin: 'Войти',
      Signout: 'Выйти',
      Chats: 'Чаты',
      Office: 'Офис',
      Users: 'Участники',
      Ethereum: 'Ethereum',
      'API Schema': 'API схема',
      Topics: 'Топики',
      Blogs: 'Блоги',
      Projects: 'Проекты',
      Tasks: 'Задачи',
      Timers: 'Таймеры',
      Technologies: 'Технологии',
      Learn: 'Уроки',
      About: 'О проекте',
      LearnStrategies: 'Стратегии обучения',
    },
  },
}

export class MainMenu extends PrismaCmsComponent<MainMenuProps, MainMenuState> {
  static defaultProps = {
    ...PrismaCmsComponent.defaultProps,
    locales,
  }

  logout = (event: React.MouseEvent) => {
    const { logout } = this.context
    event.preventDefault()
    return logout()
  }

  openLoginForm = () => {
    const { openLoginForm } = this.context

    return openLoginForm()
  }

  renderTasksLink = (): JSX.Element => {
    const filter: TaskWhereInput = {
      status: {
        in: [
          TaskStatus.NEW,
          TaskStatus.ACCEPTED,
          TaskStatus.PROGRESS,
          TaskStatus.PAUSED,
          TaskStatus.REVISIONSREQUIRED,
          TaskStatus.DISCUSS,
          TaskStatus.APPROVED,
          TaskStatus.DONE,
        ],
      },
    }

    // const encoded = encodeURIComponent(JSON.stringify(filter))

    const where = prepareTasksFiltersUrl(filter)

    return (
      <Grid item>
        {/* <Link href="/tasks/?status_in=New&status_in=Accepted&status_in=Progress&status_in=Paused&status_in=RevisionsRequired&status_in=Discuss&status_in=Approved&status_in=Done"> */}
        <Link href={`/tasks/?where=${where}`}>
          <a>
            <Typography>{this.lexicon('Tasks')}</Typography>
          </a>
        </Link>
      </Grid>
    )
  }

  render() {
    const { classes, user: currentUser } = this.props

    const { Timers } = currentUser || {}

    const [ActiveTimer] = Timers || []

    return (
      <AppBar
        // position="static"
        color="default"
        className={classes?.root}
      >
        <Toolbar>
          {/* <Button color="inherit">Login</Button> */}

          <Grid container alignItems="center" spacing={16}>
            <Grid item xs={12} sm>
              <Typography
                variant="title"
                color="inherit"
                className={classes?.flex}
              >
                <Link href="/">FreeCode.Academy</Link>
              </Typography>
            </Grid>

            <Grid item>
              <Link href="/learnstrategies/">
                <a>
                  <Typography>{this.lexicon('LearnStrategies')}</Typography>
                </a>
              </Link>
            </Grid>

            <Grid item>
              <Link href="/learn/sections">
                <a title={this.lexicon('Learn')}>
                  <Typography>{this.lexicon('Learn')}</Typography>
                </a>
              </Link>
            </Grid>

            <Grid item>
              <Link href="/technologies/">
                <a>
                  <Typography>{this.lexicon('Technologies')}</Typography>
                </a>
              </Link>
            </Grid>

            {/* 
            <Grid item>
              <Link href="/chat-rooms/">
                <a>
                  <Typography>{this.lexicon('Chats')}</Typography>
                </a>
              </Link>
            </Grid> */}

            <Grid item>
              <Link href="/people/">
                <a>
                  <Typography>{this.lexicon('Users')}</Typography>
                </a>
              </Link>
            </Grid>

            <Grid item>
              <Link href="/projects/">
                <a>
                  <Typography>{this.lexicon('Projects')}</Typography>
                </a>
              </Link>
            </Grid>

            {this.renderTasksLink()}

            <Grid item>
              <Link href="/timers/">
                <a>
                  <Typography>{this.lexicon('Timers')}</Typography>
                </a>
              </Link>
            </Grid>

            <Grid item>
              <Link href="/topics/">
                <a title={this.lexicon('Topics')}>
                  <Typography>{this.lexicon('Topics')}</Typography>
                </a>
              </Link>
            </Grid>

            <Grid item>
              <Link href="/blogs/">
                <a>
                  <Typography>{this.lexicon('Blogs')}</Typography>
                </a>
              </Link>
            </Grid>

            {/* <Grid item>
              <a
                href="/graphql-voyager/"
                rel="noindex,nofollow"
                target="_blank"
                >
                <Typography>{this.lexicon('API Schema')}</Typography>
                </a>
              </Grid> */}

            <Grid item>
              <Link href="/office/">
                <a>
                  <Typography>{this.lexicon('Office')}</Typography>
                </a>
              </Link>
            </Grid>

            {/* <Grid item>
              <a
                href="https://api.prisma-cms.com"
                rel="noindex nofollow noopener noreferrer"
                target="_blank"
              >
                <Typography>{this.lexicon('API')}</Typography>
              </a>
            </Grid> */}

            <Grid item>
              <Link href="/about/">
                <a>
                  <Typography>{this.lexicon('About')}</Typography>
                </a>
              </Link>
            </Grid>

            <Grid item>
              <a
                href="https://t.me/freecode_academy"
                title="Freecode.Academy в Телеграме"
                target="_blank"
                rel="noreferrer"
              >
                <TelegramIconSvg />
              </a>
            </Grid>

            <Grid item xs></Grid>

            {currentUser ? (
              <Fragment>
                <Grid key="callRequests" item>
                  {/* <CallRequestButtons
                    key={userId}
                    classes={{
                      icon: classes.link,
                    }}
                  /> */}
                </Grid>

                {ActiveTimer ? (
                  <Grid key="timer" item>
                    <Timer
                      timer={ActiveTimer}
                      className={classes?.iconButton}
                    />
                  </Grid>
                ) : null}

                {/* {currentUser ? (
                  <Grid key="notifications" item>
                    <MainMenuNotices
                      key={currentUser.id}
                      className={classes?.iconButton}
                    />
                  </Grid>
                ) : null} */}

                {currentUser ? (
                  <Grid key="user" item>
                    {/* <UserItem key={userId} user={currentUser} classes={classes} /> */}
                    <UserLink
                      // classes={classes}
                      user={currentUser}
                      size="small"
                      showName={false}
                    />
                  </Grid>
                ) : null}
                <Grid key="logout" item>
                  <a href="#" onClick={this.logout}>
                    {this.lexicon('Signout')}
                  </a>
                </Grid>
              </Fragment>
            ) : (
              <Grid key="login" item>
                <Button onClick={this.openLoginForm}>
                  <Typography component="span">
                    {this.lexicon('Signin')}
                  </Typography>
                </Button>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles<any>(styles as any)((props: MainMenuProps) => (
  <MainMenu {...props} />
))
