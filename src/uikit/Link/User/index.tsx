import React, { Component } from 'react'
import Typography from 'material-ui/Typography'

import Link, { styles as defaultStyles } from '..'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Avatar from 'src/uikit/Avatar'

import { UikitUserLinkProps } from './interfaces'
export * from './interfaces'

const styles = {
  ...defaultStyles,
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    width: 'auto',
  },
  row: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  avatar: {
    // '&.avatar-inline': {
    //   display: 'inline-flex',
    //   margin: 0,
    // },

    '&.avatar-size--small': {
      width: 25,
      height: 25,
      lineHeight: 25,
    },
  },
}

class UikitUserLink extends Component<UikitUserLinkProps> {
  static defaultProps = {
    withAvatar: true,
    showName: true,
    size: 'normal',
  }

  render() {
    const {
      user,
      variant,
      withAvatar,
      classes,
      secondary,
      showName,
      size,
      avatarProps,
      className,
      ...other
    } = this.props

    if (!user) {
      return null
    }

    const {
      id,
      username,
      fullname,
      // lastname,
    } = user

    const name = fullname || username

    const url = `/profile/${username}/`
    // const url = `/users/${id}`;

    const avatarLink = (
      <Link
        key={id}
        {...other}
        title={fullname || username || undefined}
        href={url}
        className={className}
      >
        <Avatar
          user={user}
          size={size}
          {...avatarProps}
          className={[
            classes?.avatar,
            'avatar-inline',
            `avatar-size--${size}`,
          ].join(' ')}
        />
      </Link>
    )

    return showName ? (
      <Grid
        container
        className={classes?.root}
        // style={{
        //   alignItems: 'center',
        //   flexWrap: "nowrap",
        // }}
      >
        <Grid item>{(withAvatar && avatarLink) || null}</Grid>

        <Grid
          item
          xs
          style={{
            textAlign: 'left',
          }}
        >
          <Link
            key={id}
            style={{
              marginLeft: size === 'small' ? undefined : 5,
            }}
            {...other}
            href={url}
          >
            {variant !== undefined ? (
              <Typography variant={variant}>
                {name}
                {this.props.position ? (
                  <span style={{ fontSize: '70%', fontStyle: 'italic' }}>
                    {' '}
                    - {this.props.position}
                  </span>
                ) : null}
              </Typography>
            ) : (
              name
            )}
          </Link>

          {secondary}
        </Grid>
      </Grid>
    ) : (
      avatarLink || null
    )
  }
}

export default withStyles<any>(styles)((props: UikitUserLinkProps) => (
  <UikitUserLink {...props} />
)) as unknown as typeof UikitUserLink
