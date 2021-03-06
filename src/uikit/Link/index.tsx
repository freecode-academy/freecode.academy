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
      // textClassName,
      classes,
      children,
      href,
      // color,
      // variant,
      ...other
    } = this.props

    // return (
    //   <Link href={href}>
    //     <a className={[classes?.root, className].join(' ')} {...other}>
    //       <Typography
    //         component="span"
    //         className={[classes?.text, textClassName].join(' ')}
    //         color={color}
    //         variant={variant}
    //       >
    //         {children || ''}
    //       </Typography>
    //     </a>
    //   </Link>
    // )

    return (
      <Link href={href}>
        <a className={[classes?.root, className].join(' ')} {...other}>
          {children}
        </a>
      </Link>
    )
  }
}

export default withStyles(styles)((props: UiLinkProps) => (
  <UiLink {...props} />
)) as typeof UiLink
