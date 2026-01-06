import React, { memo, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  SidebarContainer,
  SidebarOverlay,
  SidebarHeader,
  SidebarLogoIcon,
  SidebarLogoText,
  SidebarCollapseButton,
  SidebarNav,
  SidebarNavItem,
  SidebarFooter,
  NavItemIcon,
  NavItemLabel,
  SidebarUserSection,
  UserAvatar,
} from './styles'
import { useAppContext } from 'src/AppContext'
import { UserLink } from 'src/uikit/Link/User'

type SidebarProps = {
  isOpen: boolean
  onToggle: () => void
}

const UserIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const navItems = [
  {
    label: 'Members',
    href: '/people',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: 'Growth Strategies',
    href: '/learnstrategies',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    label: 'Technologies',
    href: '/technologies',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="8" width="8" height="8" rx="1" />
        <path d="M4 12h4" />
        <path d="M16 12h4" />
        <path d="M12 4v4" />
        <path d="M12 16v4" />
        <circle cx="4" cy="12" r="1" />
        <circle cx="20" cy="12" r="1" />
        <circle cx="12" cy="4" r="1" />
        <circle cx="12" cy="20" r="1" />
        <path d="M6 6l3 3" />
        <path d="M15 15l3 3" />
        <path d="M6 18l3-3" />
        <path d="M15 9l3-3" />
        <circle cx="5" cy="5" r="1" />
        <circle cx="19" cy="19" r="1" />
        <circle cx="5" cy="19" r="1" />
        <circle cx="19" cy="5" r="1" />
      </svg>
    ),
  },
  {
    label: 'Publications',
    href: '/topics',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M6 8h.01" />
        <path d="M10 8h8" />
        <path d="M6 12h.01" />
        <path d="M10 12h8" />
      </svg>
    ),
  },
  {
    label: 'Tasks',
    href: '/tasks',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    label: 'Timers',
    href: '/timers',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const { user, openLoginForm } = useAppContext()
  const router = useRouter()

  const handleLogoClick = useCallback(() => {
    if (isOpen) {
      router.push('/')
    } else {
      onToggle()
    }
  }, [isOpen, onToggle, router])

  return (
    <>
      <SidebarOverlay $isOpen={isOpen} onClick={onToggle} />
      <SidebarContainer $isOpen={isOpen}>
        <SidebarHeader $isOpen={isOpen}>
          <SidebarLogoIcon
            onClick={handleLogoClick}
            title={isOpen ? 'Go to home' : 'Expand sidebar'}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </SidebarLogoIcon>
          {isOpen && (
            <>
              <SidebarLogoText href="/" $isOpen={isOpen}>
                Freecode Academy
              </SidebarLogoText>
              <SidebarCollapseButton
                $isOpen={isOpen}
                onClick={onToggle}
                title="Collapse sidebar"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 3v18" />
                </svg>
              </SidebarCollapseButton>
            </>
          )}
        </SidebarHeader>

        <SidebarNav $isOpen={isOpen}>
          {navItems.map((item) => (
            <SidebarNavItem key={item.href} $isOpen={isOpen}>
              <Link href={item.href}>
                <NavItemIcon>{item.icon}</NavItemIcon>
                <NavItemLabel $isOpen={isOpen}>{item.label}</NavItemLabel>
              </Link>
            </SidebarNavItem>
          ))}
        </SidebarNav>

        <SidebarFooter>
          <SidebarUserSection $isOpen={isOpen}>
            {user ? (
              <UserLink user={user} showName={isOpen} size="small" />
            ) : (
              <button onClick={openLoginForm}>
                <UserAvatar>
                  <UserIcon />
                </UserAvatar>
                {isOpen && <span>Войти</span>}
              </button>
            )}
          </SidebarUserSection>
        </SidebarFooter>
      </SidebarContainer>
    </>
  )
}

export const SidebarMemo = memo(Sidebar)
