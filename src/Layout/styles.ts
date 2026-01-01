import styled from 'styled-components'
import { TabType } from 'src/TabSwitcher/interfaces'
import PaginationWithStyles from 'src/components/Pagination'

export const LayoutContentStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

type LayoutMainContentStyledProps = {
  $activeTab: TabType
}

export const LayoutMainContentStyled = styled.div<LayoutMainContentStyledProps>`
  display: flex;
  flex-direction: column;
  overflow: auto;
`

export const LayoutStyled = styled.div`
  /* display: flex;
  flex-direction: column;
  height: 100%; */

  display: contents;

  ${PaginationWithStyles} {
    margin: 10px auto;
  }
`
