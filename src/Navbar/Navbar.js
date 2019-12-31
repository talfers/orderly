import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors'
import { Title } from '../Styles/title'

export const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 24px;
  position: fixed;
  width: 100%;
`

export const Logo = styled(Title)`
  color: white;
  font-size: 30px;
  text-shadow: 1px 1px 4px #380502;
`

export function Navbar(){
  return (
    <NavbarStyled>
      <Logo>Orderly</Logo>
    </NavbarStyled>
  )
}
