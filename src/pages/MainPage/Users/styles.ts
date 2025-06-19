import styled from 'styled-components'

export const MainPageUsersStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1rem 0;
  padding: 0 1rem;

  /* Tablet and larger */
  @media (min-width: 768px) {
    padding: 0 1.5rem;
    gap: 2rem;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem;
  }
`

export const MainPageUserStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  /* User Link (name) */
  a {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #0056b3;

    &:hover {
      text-decoration: underline;
    }
  }

  /* Rating */
  & > div:nth-child(2) {
    display: inline-block;
    font-size: 1.1rem;
    font-weight: 700;
    color: #28a745;
    margin-bottom: 0.75rem;
    background: #e9f7ef;
    padding: 0.25rem 0.75rem;
    border-radius: 16px;
    align-self: flex-start;
  }

  /* Introduction */
  & > div:nth-child(3) {
    font-size: 0.9rem;
    color: #495057;
    line-height: 1.5;

    p {
      margin: 0;
    }
  }

  /* Tablet */
  @media (min-width: 768px) {
    padding: 1.5rem;

    a {
      font-size: 1.3rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    width: 31%;
    max-width: 400px;
  }
`
