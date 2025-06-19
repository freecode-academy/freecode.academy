import React, { useMemo } from 'react'
// import PropTypes from 'prop-types'

// import withStyles from 'material-ui/styles/withStyles'
import Typography from 'material-ui/Typography'
// import Grid from "material-ui/Grid";
// import Button from "material-ui/Button";

import moment from 'moment'

// import Header from "./header";

// import { styles, TableView } from '../../List'
import { ObjectsListView as TableView } from '../../List'

import {
  TopicsConnectionTopicFragment,
  TopicsConnectionUserFragment,
} from 'src/gql/generated'

import TagLink from 'src/uikit/Link/Tag'
import TopicLink from 'src/uikit/Link/Topic'
import BlogLink from 'src/uikit/Link/Blog'
import UserLink from 'src/uikit/Link/User'
// import { Theme } from 'material-ui/styles'

// import PageNotFound from "../../../pages/404";

// import { ForumViewProps, TableViewProps } from './interfaces';
import {
  // ColumnConfig,
  ForumViewProps,
  // TableViewProps,
} from './interfaces'

import { ColumnConfig } from 'apollo-cms/dist/DataView/List/Table'
import styled from 'styled-components'
import {
  GridCell,
  GridCellHeader,
  GridRow,
  GridTable,
} from 'src/components/Grid/styles'
import PaginationWithStyles from 'src/components/Pagination'
// import { useRouter } from 'next/router'

// const classes = {}

// const customStyles = (theme: Theme) => {
//   // const {
//   //   palette: {
//   //     background: { default: defaultBackground },
//   //   },
//   // } = theme

//   return {
//     ...styles(theme),

//     tags: {
//       marginTop: 5,
//     },

//     usersWrapper: {
//       whiteSpace: 'nowrap' as const,
//       display: 'flex',
//       alignItems: 'end',
//     },
//     member: {
//       padding: 2,
//     },
//     topicColumn: {
//       width: '70%',
//     },
//     alignCenter: {
//       textAlign: 'center' as const,
//     },
//   }
// }

// declare class TableView extends React.Component {

//   static propTypes: any;

//   static defaultProps: any;

//   public props: TableViewProps;
// }

/**
 * Табличный вывод топиков
 */
// export class ForumView<P extends ForumViewProps = ForumViewProps, S = {}, CC extends TopicsConnectionTopicFragment = TopicsConnectionTopicFragment> extends TableView<P, S, CC> {
export class ForumView<
  P extends ForumViewProps = ForumViewProps
> extends TableView<P> {
  // static propTypes = {
  //   ...TableView.propTypes,
  //   filters: PropTypes.object,
  //   setFilters: PropTypes.func,
  // }

  static defaultProps = {
    ...TableView.defaultProps,
    title: '',
    // columnData: [],
    // Header,
    // Toolbar: () => (null),
  }

  getColumns<CC extends TopicsConnectionTopicFragment>(): ColumnConfig<CC>[] {
    const { classes, variables } = this.props

    // const { tag: activeTag } = where || {}

    // const activeTag = variables?.where?.Tags_some?.Tag
    // TODO Check relation
    const activeTag = variables?.where?.ResourceTags?.some?.Tag

    return [
      {
        id: 'id',
        key: 'topic',
        label: 'Топик',
        className: classes?.topicColumn,
        renderer: (_value, record) => {
          const { name, Tags } = record

          const tagsList: JSX.Element[] = []

          Tags &&
            Tags.forEach((tag) => {
              const { Tag } = tag

              if (!Tag) {
                return
              }

              const { id, name } = Tag

              tagsList.push(
                <TagLink
                  key={id}
                  object={Tag}
                  color="textSecondary"
                  className={[classes?.tag].join(' ')}
                  textClassName={[
                    activeTag?.equals === name ? 'active' : '',
                  ].join(' ')}
                />
              )
            })

          return (
            <div>
              {/* @ts-expect-error types */}
              <TopicLink object={record}>
                <Typography variant="subheading">{name}</Typography>
              </TopicLink>

              <div className={classes?.tags}>{tagsList}</div>
            </div>
          )
        },
      },
      {
        id: 'Blog',
        label: 'Блог',
        className: classes?.alignCenter,
        renderer: (value) => {
          if (!value) {
            return null
          }

          const { name } = value

          return (
            (value && (
              // @ts-expect-error types
              <BlogLink object={value} variant="button">
                {name}
              </BlogLink>
            )) ||
            null
          )
        },
      },
      {
        id: 'CreatedBy',
        label: 'Участники',
        className: classes?.alignCenter,
        renderer: (_value, record) => {
          const users: TopicsConnectionUserFragment[] = []

          const { CreatedBy, Comments } = record

          if (!CreatedBy) {
            return
          }

          const limit = 5

          Comments &&
            Comments.forEach((n) => {
              const { CreatedBy } = n

              if (!CreatedBy) {
                return
              }

              if (
                users.length >= limit ||
                users.findIndex((n) => n.id === CreatedBy.id) !== -1
              ) {
                return
              }

              users.push(CreatedBy)
            })

          if (
            users.length < limit &&
            users.findIndex((n) => n.id === CreatedBy.id) === -1
          ) {
            users.push(CreatedBy)
          }

          return (
            <div className={classes?.usersWrapper}>
              {users.map((n) => {
                const { id } = n

                return (
                  <UserLink
                    key={id}
                    user={n}
                    showName={false}
                    size="small"
                    className={classes?.member}
                  />
                )
              })}
            </div>
          )
        },
      },
      {
        id: 'Comments',
        label: 'Комментарии',
        className: classes?.alignCenter,
        renderer: (value) => {
          return (value && value.length) || 0
        },
      },
      {
        id: 'id',
        key: 'activity',
        label: 'Активность',
        className: classes?.alignCenter,

        renderer: (_value, record) => {
          // let activity

          const { updatedAt, Comments } = record

          let date = moment(updatedAt)

          const latestComment =
            Comments?.length && Comments[Comments.length - 1]

          if (latestComment) {
            const commentDate = moment(latestComment.updatedAt)

            if (commentDate > date) {
              date = commentDate
            }
          }

          return date.fromNow()
        },
      },
    ]
  }
}

// export { customStyles as styles, ForumView as TableView }

// export default withStyles<any>(customStyles)((props: ForumViewProps) => {
//   const router = useRouter()

//   const addObject = useCallback(() => {
//     router.push('/add-topic.html')
//   }, [router])

//   return useMemo(
//     () => <ForumView {...props} addObject={addObject} />,
//     [addObject, props]
//   )
// })

const TopicsViewGridStyled = styled(GridTable)`
  grid-template-columns: auto max-content max-content min-content max-content;
`

const TopicsViewStyled = styled.div``

type TopicsViewProps = {
  objects: TopicsConnectionTopicFragment[]
  // loading: boolean
  count: number | undefined
  page: number
  limit: number | undefined | null
}

export const TopicsView: React.FC<TopicsViewProps> = ({
  objects,
  count,
  // loading,
  page,
  limit,
}) => {
  const renderers = useMemo(() => {
    return [
      {
        // id: 'id',
        // key: 'topic',
        // label: 'Топик',
        // className: classes?.topicColumn,
        renderer: (record: TopicsConnectionTopicFragment) => {
          const { name, Tags } = record

          const tagsList: JSX.Element[] = []

          Tags &&
            Tags.forEach((tag) => {
              const { Tag } = tag

              if (!Tag) {
                return
              }

              const { id } = Tag

              tagsList.push(
                <TagLink
                  key={id}
                  object={Tag}
                  color="textSecondary"
                  // className={[classes?.tag].join(' ')}
                  // textClassName={[
                  //   activeTag?.equals === name ? 'active' : '',
                  // ].join(' ')}
                />
              )
            })

          return (
            <div>
              {/* @ts-expect-error types */}
              <TopicLink object={record}>
                <Typography variant="subheading">{name}</Typography>
              </TopicLink>

              <div
              // className={classes?.tags}
              >
                {tagsList}
              </div>
            </div>
          )
        },
      },
      {
        // id: 'Blog',
        // label: 'Блог',
        // className: classes?.alignCenter,
        renderer: (record: TopicsConnectionTopicFragment) => {
          const value = record.Blog
          if (!value) {
            return null
          }

          const { name } = value

          return (
            (value && (
              // @ts-expect-error types
              <BlogLink object={value} variant="button">
                {name}
              </BlogLink>
            )) ||
            null
          )
        },
      },
      {
        // id: 'CreatedBy',
        // label: 'Участники',
        // className: classes?.alignCenter,
        renderer: (record: TopicsConnectionTopicFragment) => {
          const users: TopicsConnectionUserFragment[] = []

          const { CreatedBy, Comments } = record

          if (!CreatedBy) {
            return
          }

          const limit = 5

          Comments &&
            Comments.forEach((n) => {
              const { CreatedBy } = n

              if (!CreatedBy) {
                return
              }

              if (
                users.length >= limit ||
                users.findIndex((n) => n.id === CreatedBy.id) !== -1
              ) {
                return
              }

              users.push(CreatedBy)
            })

          if (
            users.length < limit &&
            users.findIndex((n) => n.id === CreatedBy.id) === -1
          ) {
            users.push(CreatedBy)
          }

          return (
            <div>
              {users.map((n) => {
                const { id } = n

                return (
                  <UserLink
                    key={id}
                    user={n}
                    showName={false}
                    size="small"
                    // className={classes?.member}
                  />
                )
              })}
            </div>
          )
        },
      },
      {
        // id: 'Comments',
        // label: 'Комментарии',
        // className: classes?.alignCenter,
        renderer: (record: TopicsConnectionTopicFragment) => {
          const value = record.Comments
          return (value && value.length) || 0
        },
      },
      {
        // id: 'id',
        // key: 'activity',
        // label: 'Активность',
        // className: classes?.alignCenter,
        renderer: (record: TopicsConnectionTopicFragment) => {
          // let activity

          const { updatedAt, Comments } = record

          let date = moment(updatedAt)

          const latestComment =
            Comments?.length && Comments[Comments.length - 1]

          if (latestComment) {
            const commentDate = moment(latestComment.updatedAt)

            if (commentDate > date) {
              date = commentDate
            }
          }

          return date.fromNow()
        },
      },
    ] as const
  }, [])

  return (
    <TopicsViewStyled>
      <TopicsViewGridStyled>
        <GridRow>
          <GridCellHeader>Топик</GridCellHeader>
          <GridCellHeader>Блог</GridCellHeader>
          <GridCellHeader>Участники</GridCellHeader>
          <GridCellHeader>Comments</GridCellHeader>
          <GridCellHeader>Активность</GridCellHeader>
        </GridRow>

        {objects.map((n) => {
          return (
            <GridRow key={n.id}>
              <GridCell>{renderers[0].renderer(n)}</GridCell>
              <GridCell>{renderers[1].renderer(n)}</GridCell>
              <GridCell>{renderers[2].renderer(n)}</GridCell>
              <GridCell>{renderers[3].renderer(n)}</GridCell>
              <GridCell>{renderers[4].renderer(n)}</GridCell>
            </GridRow>
          )
        })}
      </TopicsViewGridStyled>

      <PaginationWithStyles total={count ?? 0} page={page} limit={limit} />
    </TopicsViewStyled>
  )
}
