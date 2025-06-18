import { useRouter } from 'next/router'
import { AdminViewStyled, AdminViewToolbarStyled } from './styles'
import React from 'react'
import { ActivitiesView } from './Activities/View'
import Link from 'src/uikit/Link'
import { AsminUsersView } from './Users'

enum AdminSections {
  Activities = 'activities',
  Users = 'users',
}

const sections: Record<AdminSections, React.FC> = {
  [AdminSections.Activities]: ActivitiesView,
  [AdminSections.Users]: AsminUsersView,
}

export const AdminView: React.FC = () => {
  const router = useRouter()

  let content: React.ReactNode

  const section = router.query.slug?.at(0) ?? AdminSections.Activities

  switch (section) {
    case AdminSections.Activities: {
      const Component = sections[section]

      content = <Component />
      break
    }

    case AdminSections.Users: {
      const Component = sections[section]

      content = <Component />
      break
    }
  }

  return (
    <AdminViewStyled>
      <AdminViewToolbarStyled>
        <Link href={'/admin'}>Админка</Link>
        <Link href={'/admin/users'}>Пользователи</Link>
      </AdminViewToolbarStyled>
      {content}
    </AdminViewStyled>
  )
}
