import React from 'react'
import { Button } from 'src/components/Button'
import { useCurrentUser } from 'src/hooks/useCurrentUser'

import SigninForm from './Form'

export const SigninPageView: React.FC = () => {
  const { user: currentUser, logout } = useCurrentUser()

  if (!currentUser) {
    return <SigninForm />
  }

  return (
    <>
      <h3>Вы авторизованы как {currentUser.username}</h3>

      <div>
        <Button onClick={logout}>Выйти</Button>
      </div>
    </>
  )
}
