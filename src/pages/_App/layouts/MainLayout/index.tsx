import React, { useContext, useMemo } from 'react'

import Context, { PrismaCmsContext } from '@prisma-cms/context'
import Header from 'src/components/MainMenu'
import {
  LayoutContentStyled,
  LayoutStyled,
  LayoutWrapperStyled,
} from './styles'
import { LayoutStyledProps } from '../../interfaces'

type MainLayoutProps = React.PropsWithChildren<{
  layout: LayoutStyledProps | undefined
}>

/**
 * Главный шаблон для все основных страниц
 * @deprecated Use src/Layout instead
 */
export const MainLayout: React.FC<MainLayoutProps> = ({ children, layout }) => {
  const context = useContext(Context) as PrismaCmsContext

  const header = useMemo(() => <Header user={context.user} />, [context.user])

  return useMemo(() => {
    return (
      <>
        <LayoutStyled {...layout}>
          {header}
          <LayoutWrapperStyled id="wrapper">
            <LayoutContentStyled id="content">{children}</LayoutContentStyled>
          </LayoutWrapperStyled>
        </LayoutStyled>
      </>
    )
  }, [children, header, layout])
}
