import styled from 'styled-components'

export const UsersViewStyled = styled.div``

export const UsersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const UserCard = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'user rating'
    'intro intro';
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

export const UserCardUser = styled.div`
  grid-area: user;
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: center;
`

export const UserCardIntro = styled.p`
  grid-area: intro;
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const UserCardRating = styled.div`
  grid-area: rating;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  font-size: 0.8125rem;
  color: #6b7280;
  align-self: center;

  svg {
    width: 16px;
    height: 16px;
  }
`
