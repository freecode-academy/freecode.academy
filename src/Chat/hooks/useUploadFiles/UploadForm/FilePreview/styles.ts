import styled from 'styled-components'

export const FilePreviewStyled = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`
