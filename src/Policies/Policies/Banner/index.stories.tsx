import React from 'react'
import { Meta } from '@storybook/react'
import { PoliciesBanner as Component } from './'

export default {
  title: 'Policies/Policy/Banner',
  component: Component,
} as Meta

export const Default = () => {
  return (
    <Component
      // eslint-disable-next-line no-console, react/jsx-no-bind
      loginComplete={async (e) => console.log(e)}
      user={undefined}
    />
  )
}

Default.storyName = 'Баннер согласия'
