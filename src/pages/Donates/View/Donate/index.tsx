import moment from 'moment'
import React from 'react'
import NumberFormat from 'react-number-format'
import { DonateFragment } from 'src/modules/gql/generated'
import UikitUserLinkWithStyles from 'src/uikit/Link/User'

type DonateProps = {
  donate: DonateFragment
}

export const Donate: React.FC<DonateProps> = ({ donate }) => {
  return (
    <>
      <span>{moment(donate.date).format('YYYY-MM-DD')} </span>
      <span>
        <NumberFormat
          value={donate.sum}
          displayType="text"
          thousandSeparator=" "
        />{' '}
        ₽
      </span>
      <span>
        {donate.Donator ? (
          <UikitUserLinkWithStyles user={donate.Donator} />
        ) : (
          'Анонимный жертвователь'
        )}
      </span>
    </>
  )
}
