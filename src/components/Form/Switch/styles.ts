import styled from 'styled-components'

export const SwitchInput = styled.input.attrs({ type: 'checkbox' })`
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
`

export const SwitchStyled = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`

export const SwitchLabelText = styled.span`
  font-size: 14px;
  margin: 0 8px;
  color: #4b5563;
  cursor: pointer;
  user-select: none;
`
export const SwitchLabel = styled.label<{
  $checked: boolean
  $disabled?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  width: 48px;
  height: 24px;
  background: ${({ $checked }) => ($checked ? '#030213' : '#d1d5db')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  border-radius: 24px;
  position: relative;
  transition: background-color 0.2s;

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${({ $checked }) => ($checked ? 'calc(100% - 22px)' : '2px')};
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 20px;
    transition: 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`

export const SwitchWrapper = styled.div`
  display: inline-block;
  position: relative;
`
