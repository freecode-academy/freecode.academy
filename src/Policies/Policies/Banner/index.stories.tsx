import React from 'react'
import { Meta } from '@storybook/react'
import { PoliciesBanner as Component } from './'

export default {
  title: 'Policies/Policy/Banner',
  component: Component,
} as Meta

export const Default = () => {
  return <Component />
}

Default.storyName = 'Баннер согласия'
