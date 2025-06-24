import React, { useMemo } from 'react'
import { Comment as UikitComment } from 'src/components/Comments/Comment'
import { TaskCommentsProps } from './interfaces'

const TaskComments: React.FC<TaskCommentsProps> = ({ task }) => {
  // const [newCommentKey, setNewCommentKey] = useState(new Date().toISOString())

  const { Comments } = task

  /**
   * Current comments
   */
  const comments = useMemo(() => {
    return (
      (Comments &&
        Comments.map((n) => {
          const { id } = n

          return <UikitComment key={id} object={n} variant="full" />
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
  //   return taskId ? (
  //     <UikitComment
  //       key={newCommentKey}
  //       cacheKey={`${taskId}_comment_new`}
  //       object={undefined}
  //       _dirty={{
  //         Task: {
  //           connect: {
  //             id: taskId,
  //           },
  //         },
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
  // }, [newCommentKey, onCommentSave, taskId])

  return useMemo(() => {
    return (
      <div>
        {comments}

        {/* {newComment} */}
      </div>
    )
  }, [comments])
  // }
}

export default TaskComments
