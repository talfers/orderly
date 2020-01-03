import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors'
import { Title } from '../Styles/title'

export const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 24px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled(Title)`
  color: white;
  font-size: 30px;
  text-shadow: 1px 1px 4px #380502;
`;

const UserStatus = styled.div`
  color: #fff;
  font-size: 12px;
  margin-right: 30px;
`;

const LoginButton = styled.span`
  cursor: pointer;
  margin: 0 10px;
`;

export function Navbar({login, loggedIn, logout}){
  return (
    <NavbarStyled>
      <Logo>Orderly</Logo>
      <UserStatus>
      {loggedIn.email ?
        <>
          <LoginButton>{loggedIn.displayName}</LoginButton>
          <LoginButton
            onClick={() => {logout()}}
          >
            Logout
          </LoginButton>
        </> :
        <></>
      }
      {  !loggedIn ?
        <LoginButton
          onClick={() => login()}
        >
          Login    |    Signup
        </LoginButton> :
        <></>
      }

      </UserStatus>
    </NavbarStyled>
  )
}
