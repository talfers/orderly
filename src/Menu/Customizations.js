import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../Data/foodData';

const CustomizationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const CustomizationsCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;

const ToppingPrice = styled.div`
  color: grey;
  font-size: 10px;
  font-style: italic;
  display: inline;
  margin-left: 4px;
`;

export function Customizations({toppings, checkTopping}) {
  return (
    <CustomizationsGrid>
      {toppings.map((topping, index) => {
        return (
          <CheckboxLabel>
            <CustomizationsCheckbox checked={topping.checked} onClick={() => checkTopping(index)} type="checkbox"/>
            {topping.name}
            <ToppingPrice>(+{formatPrice(topping.price)})</ToppingPrice>
          </CheckboxLabel>
        )
      })}

    </CustomizationsGrid>
  )
}
