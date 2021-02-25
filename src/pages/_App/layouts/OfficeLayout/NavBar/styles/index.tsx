import styled from 'styled-components'

export const OfficeLayoutNavBarStyled = styled.aside`
  background: ${({ theme }) => theme.officeTheme.bg.sidebar};

  .separator {
    flex: 1;
  }

  .mainLinks {
    display: flex;
    align-items: center;
    padding: 5px 5px 0 0;

    > * {
      margin: 0 5px;
    }

    button {
      height: 40px;
      width: 40px;
    }
  }
`
