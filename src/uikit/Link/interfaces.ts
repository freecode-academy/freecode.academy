import { HTMLAttributes } from 'react'
import { TypographyProps } from 'material-ui/Typography'
import { LinkProps } from 'next/link'

export type UiLinkProps = LinkProps & {
  classes?: {
    root: string
    text: string
  }

  className?: string

  textClassName?: string

  style?: any

  title?: string

  onClick?: (event?: any) => void

  color?: TypographyProps['color']

  variant?: TypographyProps['variant']
} & HTMLAttributes<HTMLAnchorElement>
