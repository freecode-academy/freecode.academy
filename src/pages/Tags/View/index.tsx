import React from 'react'
import { ObjectsListView, styles } from 'src/components/view/List'

import withStyles from 'material-ui/styles/withStyles'
import { TagsViewProps } from './interfaces'
import { ColumnConfig } from 'apollo-cms/dist/DataView/List/Table'
import { TagFragment } from 'src/gql/generated'
import UserLink from 'src/uikit/Link/User'
import Grid from 'src/uikit/Grid'
import Link from 'next/link'

class TagsView<
  P extends TagsViewProps = TagsViewProps
> extends ObjectsListView<P> {
  static defaultProps = {
    ...ObjectsListView.defaultProps,
    title: '',
  }

  getColumns<CC extends TagFragment>(): ColumnConfig<CC>[] {
    return [
      {
        id: 'name',
        key: 'name',
        label: 'Тег',
        renderer: (value: CC['name'], record) => {
          if (!value || !record.id) {
            return null
          }

          return (
            <Link href={`/tag/${record.name}`} title={record.name}>
              {record.name}
            </Link>
          )
        },
      },
      {
        id: 'Resources',
        key: 'Resources',
        label: 'Ресурсы',
        renderer: (value: CC['Resources']) => {
          const items =
            value?.map((n) => {
              if (!n.Resource) {
                return null
              }

              return (
                <Grid key={n.id} item>
                  <Link href={n.Resource.uri} title={n.Resource.name || ''}>
                    {n.Resource.name}
                  </Link>
                </Grid>
              )
            }) ?? []

          return (
            <Grid container spacing={8}>
              {items}
            </Grid>
          )
        },
      },
      {
        id: 'CreatedBy',
        key: 'CreatedBy',
        label: 'Кем создан',
        renderer: (value: CC['CreatedBy']) => {
          return value ? <UserLink user={value} /> : null
        },
      },
    ]
  }
}

export default withStyles<any>(styles)((props: TagsViewProps) => (
  <TagsView {...props} />
))
