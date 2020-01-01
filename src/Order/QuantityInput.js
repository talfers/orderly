import React from 'react';
import styled from 'styled-components';
import { Title } from '../Styles/title';
import { pizzaRed } from '../Styles/colors';

const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 24px;
  text-align: center;
  border: none;
  outline: none;
`;

const IncrementContainer = styled(Title)`
  display: flex;
  height: 24px;
`;

const IncrementButton = styled.div`
  width: 23px;
  color: ${pizzaRed};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  border: 1px solid ${pizzaRed};
  &:hover {
    background-color: ${pizzaRed};
    color: #fff;
  }
  ${({disabled}) => {return disabled && `opacity: 0.4; pointer-events: none;`}}
`;


export function QuantityInput({quantity}) {
  return (
    <IncrementContainer>
      <div>Quantity:</div>
      <IncrementButton onClick={() => {
        quantity.setQuantity(quantity.quantity - 1)

      }} disabled={quantity.quantity === 1}> - </IncrementButton>
      <QuantityInputStyled value={quantity.quantity} {...quantity}/>
      <IncrementButton onClick={() => {
        quantity.setQuantity(quantity.quantity + 1)

      }} disabled={quantity.quantity >= 99}> + </IncrementButton>
    </IncrementContainer>
  )
}
