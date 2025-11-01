import styled, { css } from 'styled-components'

export const FormControlLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;

  .required {
    color: #f44336;
    margin-left: 0.25rem;
  }
`

export const FormControlHelperText = styled.div`
  font-size: 0.75rem;
  margin-top: 0.25rem;
`

type FormControlStyledProps = {
  $error: boolean
}

export const FormControlStyled = styled.div<FormControlStyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;

  ${({ $error }) =>
    $error &&
    css`
      ${FormControlLabel}, ${FormControlHelperText} {
        color: #f44336;
      }
    `}
`
