import React, { useMemo } from 'react'
import { MainMenuNoticesProps } from './interfaces'

import IconButton from 'material-ui/IconButton'
import NoticesIcon from 'material-ui-icons/Notifications'
import NoticesActiveIcon from 'material-ui-icons/NotificationsActive'

import { useNoticesConnectionQuery } from 'src/modules/gql/generated'
import Link from 'next/link'

const MainMenuNotices: React.FC<MainMenuNoticesProps> = ({
  className,
  ...other
}) => {
  const queryResult = useNoticesConnectionQuery({
    variables: {
      getNodes: false,
    },
  })

  return useMemo(() => {
    let icon = <NoticesIcon />

    if (queryResult.data?.objectsConnection.aggregate.count) {
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
  }, [className, other, queryResult.data?.objectsConnection.aggregate.count])
}

export default MainMenuNotices
