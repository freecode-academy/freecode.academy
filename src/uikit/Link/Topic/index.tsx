import React, { Component } from 'react'
import Typography from 'material-ui/Typography'

import Link from '..'
import { Maybe, Resource } from 'src/gql/generated'
import { makeTopicLink } from '../Resource'

export interface TopicLinkProps extends React.PropsWithChildren {
  topic:
    | {
        __typename?: 'Resource'
        id: string
        name?: Resource['name']
        longtitle?: Maybe<string>
        uri: string
      }
    | null
    | undefined
}

export class TopicLink extends Component<TopicLinkProps> {
  render() {
    const { topic, children, ...other } = this.props

    if (!topic) {
      return null
    }

    const { name, longtitle } = topic

    const uri = makeTopicLink(topic)

    if (!name || !uri) {
      return null
    }

    return (
      <Link href={uri} title={longtitle || name} {...other}>
        {children || <Typography component="span">{name}</Typography>}
      </Link>
    )
  }
}
