import { useRouter } from 'next/router'
import { AdminViewStyled, AdminViewToolbarStyled } from './styles'
import React from 'react'
import { ActivitiesView } from './Activities/View'

enum AdminSections {
  Activities = 'activities',
}

const sections: Record<AdminSections, React.FC> = {
  [AdminSections.Activities]: ActivitiesView,
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
  }

  return (
    <AdminViewStyled>
      <AdminViewToolbarStyled></AdminViewToolbarStyled>
      {content}
    </AdminViewStyled>
  )
}
