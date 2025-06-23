import React from 'react'

import Typography from 'material-ui/Typography'
import BlogLink from 'src/uikit/Link/Blog'
import { TopicBlogProps } from './interfaces'

export const TopicBlog: React.FC<TopicBlogProps> = ({ Topic }) => {
  const { Blog } = Topic || {}

  return Blog ? (
    <Typography>
      <i>В блоге</i> <BlogLink object={Blog} />
    </Typography>
  ) : null
}
