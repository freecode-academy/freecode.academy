import { Typography } from 'material-ui'
import React from 'react'
import { DonateFragment } from 'src/modules/gql/generated'
import { DonateForm } from 'src/pages/About/DonateForm'
import { Donate } from './Donate'
import { DonatesPageViewStyled } from './styles'

type DonatesPageViewProps = {
  donates: DonateFragment[]
}

export const DonatesPageView: React.FC<DonatesPageViewProps> = ({
  donates,
}) => {
  return (
    <>
      <div
        style={{
          marginBottom: 30,
        }}
      >
        <DonateForm />
      </div>

      {donates.length ? (
        <>
          <Typography
            variant="title"
            style={{
              marginBottom: 15,
            }}
          >
            Большое спасибо тем, кто уже поддержал проект!
          </Typography>

          <DonatesPageViewStyled>
            {donates.map((n) => {
              return <Donate key={n.id} donate={n} />
            })}
          </DonatesPageViewStyled>
        </>
      ) : null}
    </>
  )
}
