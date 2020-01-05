import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../Data/foodData';

const CustomizationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CustomizationsCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center
  @media only screen and (max-width: 700px) {
    font-size: 10px;
  }
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
          <CheckboxLabel key={index}>
            <CustomizationsCheckbox
              readOnly
              onClick={() => checkTopping(index)}
              checked={topping.checked}
              type="checkbox"
            />
              {topping.name}
            <ToppingPrice>(+{formatPrice(topping.price)})</ToppingPrice>
          </CheckboxLabel>
        )
      })}

    </CustomizationsGrid>
  )
}
