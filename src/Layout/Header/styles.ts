import styled, { css } from 'styled-components'
import Link from 'next/link'
import { minWidth } from 'src/theme/helpers'
import theme from 'src/theme'

export const V1HeaderHeaderContainerStyled = styled.header`
  position: sticky;
  top: 0;
  z-index: 500;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${theme.colors.border};
`

export const V1HeaderHeaderContentStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing[2]};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[2]};
`

export const V1HeaderLogoStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};

  &:hover {
    text-decoration: none;
  }
`

export const V1HeaderLogoIconStyled = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(
    45deg,
    ${theme.colors.green[500]},
    ${theme.colors.blue[500]}
  );
  border-radius: ${theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.sm};
`

export const V1HeaderLogoTextStyled = styled.span`
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.lg};
  /* display: none; */

  /* ${minWidth.md(css`
    display: initial;
  `)} */
`

export const V1HeaderDesktopNavStyled = styled.nav`
  display: none;
  align-items: center;
  gap: ${theme.spacing[6]};

  @media (min-width: ${theme.breakpoints.md}px) {
    display: flex;
  }
`

export const V1HeaderNavLinkStyled = styled(Link)`
  color: ${theme.colors.gray[600]};
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.primary};
  }
`

export const V1HeaderMobileMenuButtonStyled = styled.label.attrs({
  htmlFor: 'mobile-menu-toggle',
})`
  padding: 0;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  font-size: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (min-width: ${theme.breakpoints.md}px) {
    display: none;
  }
`

export const V1HeaderRightSectionStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};

  ${V1HeaderMobileMenuButtonStyled} {
    margin-left: -${theme.spacing[1]};
  }
`

export const V1HeaderMenuCheckboxStyled = styled.input.attrs({
  type: 'checkbox',
  id: 'mobile-menu-toggle',
})`
  display: none;
`

export const V1HeaderMobileMenuOverlayStyled = styled.label.attrs({
  htmlFor: 'mobile-menu-toggle',
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: none;

  #mobile-menu-toggle:checked ~ & {
    display: block;
  }
`

export const V1HeaderMobileMenuStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100%;
  background-color: ${theme.colors.background};
  box-shadow: ${theme.shadows.xl};
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1010;
  padding: ${theme.spacing[6]};

  #mobile-menu-toggle:checked ~ & {
    transform: translateX(0);
  }
`

export const V1HeaderMobileMenuHeaderLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

export const V1HeaderMobileMenuHeaderStyled = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: ${theme.spacing[4]};

  .title {
    flex: 1;
    font-weight: ${theme.fontWeight.bold};
  }
`

export const V1HeaderMobileNavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`

export const V1HeaderMobileNavLinkStyled = styled(Link)`
  color: ${theme.colors.gray[600]};
  text-decoration: none;
  padding: ${theme.spacing[2]} 0;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.primary};
  }
`
