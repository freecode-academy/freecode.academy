import React from 'react'
import { LayoutContentStyled, LayoutStyled } from './styles'
// import { MainMenuWithStyles as MainMenu } from 'src/components/MainMenu'
// import { usePolicies } from 'src/Policies/hooks/usePolicies'
import { Header } from './Header'

type LayoutProps = React.PropsWithChildren

export const Layout: React.FC<LayoutProps> = ({ children, ...other }) => {
  // const { policies } = usePolicies()

  return (
    <>
      <LayoutStyled {...other}>
        <Header />

        <LayoutContentStyled>{children}</LayoutContentStyled>

        {/* <Footer /> */}
      </LayoutStyled>

      {/* {policies} */}
    </>
  )
}
