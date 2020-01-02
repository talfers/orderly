import React from 'react';
import styled from 'styled-components';
import { menuItems, formatPrice } from '../Data/foodData';
import { MenuGrid, MenuItem, MenuItemLabel } from './MenuGrid';

export const MenuStyled = styled.div`
  margin: 0px 400px 50px 20px;
`;

export function Menu({setOpenItem}){
  return (
    <MenuStyled>
      {
        //<h1>Menu</h1>
      }
        <>
          {Object.entries(menuItems).map(([key, values]) => {
            return(
              <div key={key}>
                <h1>{key}</h1>
                  <MenuGrid>
                    {values.map(item => {
                      return(
                        <MenuItem key={item.name} img={item.img} onClick={() => setOpenItem(item)}>
                          <MenuItemLabel>
                            <div>{item.name}</div>
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
