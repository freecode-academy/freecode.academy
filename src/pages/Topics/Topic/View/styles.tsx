import styled from 'styled-components'
import { CommentCreateFormStyled } from './Comments/Create/styles'

export const TopicViewTitleStyled = styled.h1``

export const TopicViewStyled = styled.section`
  padding: 20px 30px;

  ${CommentCreateFormStyled} {
    margin: 2rem 0 0;
  }
`
