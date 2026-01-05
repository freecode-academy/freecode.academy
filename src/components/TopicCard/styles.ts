import styled from 'styled-components'

export const TopicCardStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'title blog'
    'content content'
    'author date';
  gap: 8px;
  background: #ffffff;
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`

export const TopicCardTitle = styled.h3`
  grid-area: title;
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  align-self: center;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #3b82f6;
    }
  }
`

export const TopicCardBlog = styled.div`
  grid-area: blog;
  font-size: 0.875rem;
  color: #6b7280;
  align-self: center;

  a {
    color: #3b82f6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const TopicCardContent = styled.div`
  grid-area: content;
`

export const TopicCardAuthor = styled.div`
  grid-area: author;
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: center;
`

export const TopicCardDate = styled.div`
  grid-area: date;
  font-size: 0.875rem;
  color: #6b7280;
  align-self: center;
`

export const TopicCardIntro = styled.div`
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const TopicCardLongtitle = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
