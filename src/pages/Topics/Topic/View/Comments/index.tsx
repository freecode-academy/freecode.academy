import React, { useCallback, useMemo, useState } from 'react'
import UikitComment from 'src/uikit/Comments/Comment'
import { TopicCommentsProps } from './interfaces'

const TopicComments: React.FC<TopicCommentsProps> = ({ topic }) => {
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

  const [newCommentKey, setNewCommentKey] = useState(new Date().toISOString())

  const { id: topicId, Comments } = topic

  /**
   * Current comments
   */
  const comments = useMemo(() => {
    return (
      (Comments &&
        Comments.map((n) => {
          const { id } = n

          return <UikitComment key={id} object={n} />
        })) ||
      null
    )
  }, [Comments])

  const onCommentSave = useCallback(() => {
    setNewCommentKey(new Date().toISOString())
  }, [])

  /**
   * New comment
   */
  const newComment = useMemo(() => {
    return topicId ? (
      <UikitComment
        key={newCommentKey}
        cacheKey={`${topicId}_comment_new`}
        object={undefined}
        _dirty={{
          topicID: topicId,
          components: [
            {
              name: 'RichText',
              component: 'RichText',
              components: [],
              props: {},
            },
          ],
        }}
        onSave={onCommentSave}
      />
    ) : null
  }, [newCommentKey, onCommentSave, topicId])

  return useMemo(() => {
    return (
      <div>
        {comments}

        {newComment}
      </div>
    )
  }, [comments, newComment])
  // }
}

export default TopicComments
