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
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

export const Brand = styled(Title)`
  display: flex;
  align-items: center;
  color: white;
  font-size: 30px;
  text-shadow: 1px 1px 4px #380502;
`;

const UserStatus = styled.div`
  color: #fff;
  font-size: 16px;
  margin-right: 30px;
  display: flex;
  align-items: center;
`;

const StoreDisplay = styled.div`
  background: darkred;
  padding: 6px 10px;
  border-radius: 10px;
  margin-right: 20px;
  cursor: pointer;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const LoginButton = styled.span`
  cursor: pointer;
  margin: 0 10px;
  position: relative;
  ${({hover}) => hover ? `
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      background: #fff;
      height: 2px;
      width: 100%;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.2s ease-in;
    }
    &:hover {
      &::after {
        transform: scaleX(1);
      }
    }
    ` :
    null
  }
`;

export function Navbar({login, loggedIn, logout, store, orderType, setOrderType}){
  return (
    <NavbarStyled>
      <Brand><Logo src="/logo128.png"/>Orderly</Brand>
      <UserStatus>
      {store ? <StoreDisplay onClick={() => setOrderType({...orderType, decision: false})}>{orderType.selection === 'delivery' ? `Delivery from ${store.location}` : `Pickup at ${store.location}`}</StoreDisplay> : <div/>}
      {loggedIn.email ?
        <>
          <LoginButton>{loggedIn.displayName.split(" ")[0]}</LoginButton>
          <LoginButton
            hover
            onClick={() => {logout()}}
          >
            Logout
          </LoginButton>
        </> :
        <></>
      }
      {  !loggedIn ?
        <>
          <LoginButton
            hover
            onClick={() => login()}
          >
            Login
          </LoginButton>
          <LoginButton
            hover
            onClick={() => login()}
          >
            Signup
          </LoginButton>

        </> :
        <></>
      }
      </UserStatus>

    </NavbarStyled>
  )
}
