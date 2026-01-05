import React, { Component } from 'react'

import Link from 'next/link'

// import Typography from 'material-ui/Typography'

import { withStyles } from 'material-ui/styles'

import { UiLinkProps } from './interfaces'

export const styles = {
  root: {},
  text: {
    display: 'inline-block',
  },
}

export class UiLink<P extends UiLinkProps> extends Component<P> {
  render() {
    const {
      className,
      classes,
      children,
      href,
      // color,
      // variant,
      ...other
    } = this.props

    return (
      <Link
        href={href}
        className={[classes?.root, className].join(' ')}
        {...other}
      >
        {children}
      </Link>
    )
  }
}

export default withStyles<any>(styles)((props: UiLinkProps) => (
  <UiLink {...props} />
)) as typeof UiLink
