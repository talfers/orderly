import React from 'react';
import styled from 'styled-components';

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

export function Customizations({toppings, checkTopping}) {
  return (
    <CustomizationsGrid>
      {toppings.map((topping, index) => {
        return (
          <CheckboxLabel>
            <CustomizationsCheckbox checked={topping.checked} onClick={() => checkTopping(index)} type="checkbox"/>
            {topping.name}
          </CheckboxLabel>
        )
      })}

    </CustomizationsGrid>
  )
}
