import React, { useMemo } from 'react'
import {
  ResourceFragment,
  TopicsConnectionTopicFragment,
} from 'src/gql/generated'
import { Comment } from 'src/components/Comments/Comment'
import dynamic from 'next/dynamic'

const CommentCreateForm = dynamic(
  () => import('./Create').then((r) => r.CommentCreateForm),
  {
    ssr: false,
  }
)

export interface TopicCommentsProps {
  topic: ResourceFragment | TopicsConnectionTopicFragment
}

export const TopicComments: React.FC<TopicCommentsProps> = ({ topic }) => {
  // constructor(props: TopicCommentsProps) {
  //   super(props)

  //   this.state = {
  //     ...this.state,
  //     newCommentKey: new Date().toISOString(),
  //   }
  // }

  // onCommentSave = () => {
  //   this.setState({
  //     newCommentKey: new Date().toISOString(),
  //   })
  // }

  // render() {

  // const [newCommentKey, setNewCommentKey] = useState(new Date().toISOString())

  const { Comments } = topic

  /**
   * Current comments
   */
  const comments = useMemo(() => {
    return (
      (Comments &&
        Comments.map((n) => {
          const { id } = n

          return <Comment key={id} object={n} variant="full" />
        })) ||
      null
    )
  }, [Comments])

  // const onCommentSave = useCallback(() => {
  //   setNewCommentKey(new Date().toISOString())
  // }, [])

  /**
   * New comment
   */
  // const newComment = useMemo(() => {
  //   return topicId ? (
  //     <UikitComment
  //       key={newCommentKey}
  //       cacheKey={`${topicId}_comment_new`}
  //       object={undefined}
  //       _dirty={{
  //         topicID: topicId,
  //         components: [
  //           {
  //             name: 'RichText',
  //             component: 'RichText',
  //             components: [],
  //             props: {},
  //           },
  //         ],
  //       }}
  //       onSave={onCommentSave}
  //     />
  //   ) : null
  // }, [newCommentKey, onCommentSave, topicId])

  return (
    <div>
      {comments}

      <CommentCreateForm topicID={topic.id} />
    </div>
  )
}
