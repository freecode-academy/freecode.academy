import React from 'react'
// import PropTypes from 'prop-types'

import PrismaCmsComponent from '@prisma-cms/component'

import { AuthUsersFormProps, AuthUsersFormState } from './interfaces'
import AuthUsersConnector from './AuthUsersConnector'
import { UserWhereInput } from 'src/modules/gql/generated'

type Filters = { search: string }

class AuthUsersForm extends PrismaCmsComponent<
  AuthUsersFormProps,
  AuthUsersFormState
> {
  // static propTypes = {
  //   ...PrismaCmsComponent.propTypes,
  //   first: PropTypes.number.isRequired,
  // }

  static defaultProps = {
    ...PrismaCmsComponent.defaultProps,
    first: 3,
  }

  getFilters = (): Filters | undefined => {
    const { uri } = this.context

    let filters: Filters | undefined

    const { authFilters } = uri.query(true)

    if (authFilters && typeof authFilters === 'string') {
      try {
        filters = authFilters && JSON.parse(authFilters)
      } catch (error) {
        console.error(console.error(error))
      }
    }

    return filters
  }

  setFilters = (filters: Filters) => {
    const { uri, router } = this.context

    let newUri = uri.clone()

    const currentFilters = this.getFilters()

    filters = {
      ...currentFilters,
      ...filters,
    }

    let authFilters = filters ? JSON.stringify(filters) : undefined

    if (authFilters === '{}') {
      authFilters = undefined
    }

    if (filters) {
      // if (newUri.hasQuery) {
      newUri = newUri.setQuery({
        authFilters,
      })
      // }
      // else {
      //   newUri = newUri.addQuery({
      //     filters,
      //   });
      // }
    } else {
      newUri.removeQuery('authFilters')
    }

    newUri.removeQuery('authPage')

    const url = newUri.resource()

    router.push(url)
  }

  // TODO: надо исправить фильтры
  cleanFilters = () => {
    const { uri, router } = this.context

    // console.error('cleanFilters router', router);

    // const {
    //   history,
    // } = router;

    const newUri = uri.clone()

    newUri.removeQuery('authPage')
    newUri.removeQuery('authFilters')

    const url = newUri.resource()

    router.push(url)
  }

  prepareWhere(): UserWhereInput | undefined {
    const filters = this.getFilters()

    const search = filters?.search

    return search
      ? {
          OR: [
            {
              id: {
                equals: search,
              },
            },
            {
              username: {
                startsWith: search,
              },
            },
            {
              email: {
                startsWith: search,
              },
            },
            {
              fullname: {
                contains: search,
              },
            },
          ],
        }
      : undefined
  }

  onPasswordChange = (password: string) => {
    this.setState({
      password,
    })
  }

  render() {
    const { uri } = this.context

    const { first = AuthUsersForm.defaultProps.first as number, ...other } =
      this.props

    const { password } = this.state

    const { authPage } = uri.query(true)

    let skip

    const page =
      authPage && typeof authPage === 'string' ? parseInt(authPage) : 0

    if (page > 1 && first) {
      skip = (page - 1) * first
    }

    return (
      <AuthUsersConnector
        first={first}
        skip={skip}
        where={this.prepareWhere()}
        setFilters={this.setFilters}
        getFilters={this.getFilters}
        cleanFilters={this.cleanFilters}
        password={password || ''}
        onPasswordChange={this.onPasswordChange}
        {...other}
      />
    )
  }
}

// export default (AuthUsersForm as unknown) as React.FC<AuthUsersFormProps>

export default AuthUsersForm
