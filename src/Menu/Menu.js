import React from 'react';
import styled from 'styled-components';
import { menuItems, formatPrice } from '../Data/foodData';
import { MenuGrid, MenuItem, MenuItemLabel } from './MenuGrid';

export const MenuStyled = styled.div`
  margin: 0px 420px 50px 20px;
  transition: margin-right 0.3s ease;
  ${({open, mobile}) => {
    if(open && !mobile) {
      return `margin-right: 360px;`
    } else {
      return `margin-right: 20px;`
    }
  }
}
  @media only screen and (max-width: 900px) {
    margin-right: 20px;
  }
`;

export function Menu({setOpenItem, orderDrawerOpen, isMobile}){

  return (
    <MenuStyled mobile={isMobile} open={orderDrawerOpen}>
        <>
          {Object.entries(menuItems).map(([key, values], index) => {
            return (
              <div key={index}>
                <h1>{key}</h1>
                  <MenuGrid>
                    {values.map((item, index) => {
                      return (
                        <MenuItem key={index} img={item.img} onClick={() => setOpenItem(item)}>
                          <MenuItemLabel>
                            <div>{item.ref}{item.name}</div>
                            <div>{formatPrice(item.price)}</div>
                          </MenuItemLabel>
                        </MenuItem>
                      )
                    })}
                  </MenuGrid>
                </div>
            )
          })}
        </>
    </MenuStyled>
  )
}
