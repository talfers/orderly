import React from 'react';
import styled from 'styled-components';
import { menuItems } from '../Data/foodData';
import { MenuGrid, MenuItem, MenuItemLabel } from './MenuGrid';

export const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`

export function Menu({setOpenItem}){
  return (
    <MenuStyled>
      {
        //<h1>Menu</h1>
      }
        <>
          {Object.entries(menuItems).map(([key, values]) => {
            return(
              <>
                <h1>{key}</h1>
                  <MenuGrid>
                    {values.map(item => {
                      return(
                        <MenuItem img={item.img} onClick={() => setOpenItem(item)}>
                          <MenuItemLabel>{item.name}</MenuItemLabel>
                        </MenuItem>
                      )
                    })}
                  </MenuGrid>
                </>
            )
          })}
        </>
    </MenuStyled>
  )
}
