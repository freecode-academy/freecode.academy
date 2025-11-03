import React, { useCallback, useMemo } from 'react'
import { useLanguage } from 'src/hooks/i18n/useLanguage'
import { XIcon } from '../icons/Icons'
import { MenuIcon } from '../icons/Icons'
import { i18nTranslationKey } from 'src/i18n/interfaces'
import { useAppContext } from 'src/AppContext'
import { UserLink } from 'src/uikit/Link/User'
import {
  V1HeaderDesktopNavStyled,
  V1HeaderHeaderContainerStyled,
  V1HeaderHeaderContentStyled,
  // V1HeaderLogoIconStyled,
  V1HeaderLogoStyled,
  V1HeaderLogoTextStyled,
  V1HeaderMobileMenuButtonStyled,
  V1HeaderMobileMenuHeaderStyled,
  V1HeaderMobileMenuOverlayStyled,
  V1HeaderMobileMenuStyled,
  V1HeaderMobileNavLinkStyled,
  V1HeaderMobileNavStyled,
  V1HeaderNavLinkStyled,
  V1HeaderRightSectionStyled,
  V1HeaderMenuCheckboxStyled,
  V1HeaderMobileMenuHeaderLabelStyled,
} from './styles'
import { Button } from 'src/components/Button'

// import { LanguagesSelect } from './Languages'

const navItems: {
  key: i18nTranslationKey
  href: string
  sudo?: boolean
}[] = [
  { key: 'mainMenu.admin.title', href: '/admin', sudo: true },
  { key: 'mainMenu.learn.title', href: '/learn/sections' },
  { key: 'mainMenu.learnstrategies.title', href: '/learnstrategies' },
  { key: 'mainMenu.people.title', href: '/people' },
  { key: 'mainMenu.technologies.title', href: '/technologies' },
  { key: 'mainMenu.topics.title', href: '/topics' },
  { key: 'mainMenu.start.title', href: '/start/developers' },
  { key: 'mainMenu.about.title', href: '/about' },
] as const

export const Header: React.FC = () => {
  const { user, openLoginForm } = useAppContext()

  const { t } = useLanguage()

  const handleMobileNavClick = useCallback(() => {
    // Close the menu by unchecking the checkbox
    const checkbox = document.querySelector<HTMLInputElement>(
      '#mobile-menu-toggle'
    )
    if (checkbox) {
      checkbox.checked = false
    }
  }, [])

  const userProfileLink = useMemo(() => {
    if (user) {
      return <UserLink user={user} showName={false} />
    } else {
      return <Button onClick={openLoginForm}>Войти</Button>
    }
  }, [user, openLoginForm])

  return (
    <>
      <V1HeaderHeaderContainerStyled>
        <V1HeaderHeaderContentStyled>
          <V1HeaderLogoStyled href="/">
            {/* <V1HeaderLogoIconStyled>FCA</V1HeaderLogoIconStyled> */}
            <V1HeaderLogoTextStyled>Freecode Academy</V1HeaderLogoTextStyled>
          </V1HeaderLogoStyled>

          <V1HeaderDesktopNavStyled>
            {navItems.map((item) => {
              if (item.sudo && !user?.sudo) {
                return null
              }

              return (
                <V1HeaderNavLinkStyled key={item.key} href={item.href}>
                  {t(item.key)}
                </V1HeaderNavLinkStyled>
              )
            })}
          </V1HeaderDesktopNavStyled>

          <V1HeaderRightSectionStyled>
            {/* <LanguagesSelect /> */}

            {userProfileLink}

            <V1HeaderMobileMenuButtonStyled>
              <MenuIcon size={20} />
            </V1HeaderMobileMenuButtonStyled>
          </V1HeaderRightSectionStyled>
        </V1HeaderHeaderContentStyled>
      </V1HeaderHeaderContainerStyled>

      <V1HeaderMenuCheckboxStyled />
      <V1HeaderMobileMenuOverlayStyled />

      <V1HeaderMobileMenuStyled>
        <V1HeaderMobileMenuHeaderStyled>
          <span className="title">{t('mainMenu.title')}</span>
          <V1HeaderMobileMenuHeaderLabelStyled htmlFor="mobile-menu-toggle">
            <XIcon size={20} />
          </V1HeaderMobileMenuHeaderLabelStyled>
        </V1HeaderMobileMenuHeaderStyled>

        <V1HeaderMobileNavStyled>
          {userProfileLink && (
            <div style={{ marginBottom: '8px' }}>{userProfileLink}</div>
          )}

          {navItems.map((item) => {
            if (item.sudo && !user?.sudo) {
              return null
            }

            return (
              <V1HeaderMobileNavLinkStyled
                key={item.key}
                href={item.href}
                onClick={handleMobileNavClick}
              >
                {t(item.key)}
              </V1HeaderMobileNavLinkStyled>
            )
          })}
        </V1HeaderMobileNavStyled>
      </V1HeaderMobileMenuStyled>
    </>
  )
}
