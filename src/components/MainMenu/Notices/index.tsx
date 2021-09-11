import React, { useMemo } from 'react'
import { MainMenuNoticesProps } from './interfaces'

import IconButton from 'material-ui/IconButton'
import NoticesIcon from 'material-ui-icons/Notifications'
import NoticesActiveIcon from 'material-ui-icons/NotificationsActive'

import { useNoticesCountQuery } from 'src/modules/gql/generated'
import Link from 'next/link'

const MainMenuNotices: React.FC<MainMenuNoticesProps> = ({
  className,
  ...other
}) => {
  const queryResult = useNoticesCountQuery()

  return useMemo(() => {
    let icon = <NoticesIcon />

    if (queryResult.data?.noticesCount) {
      icon = <NoticesActiveIcon color="secondary" />
    }

    return (
      <>
        <Link href="/office/notices">
          <IconButton className={className} title="Уведомления" {...other}>
            {icon}
          </IconButton>
        </Link>
      </>
    )
  }, [className, other, queryResult.data?.noticesCount])
}

export default MainMenuNotices
