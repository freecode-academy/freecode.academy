import styled from 'styled-components'
import NextLink from 'next/link'
import theme from 'src/theme'

type SizeProps = {
  $size?: 'small' | 'normal' | 'big'
}

export const UserLinkContainer = styled.div`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  max-width: 100%;
  min-width: 0;
  gap: 5px;
`

export const AvatarLink = styled(NextLink)`
  display: inline-flex;
  text-decoration: none;
  flex-shrink: 0;
`

export const NameContainer = styled.div`
  text-align: left;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`

export const NameLink = styled(NextLink)<SizeProps>`
  display: block;
  margin-left: ${({ $size }) => ($size === 'small' ? '0' : '5px')};
  text-decoration: none;
  color: ${theme.colors.foreground};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
  }
`

export const PositionText = styled.span`
  font-size: 70%;
  font-style: italic;
`
