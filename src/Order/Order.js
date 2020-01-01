import React from 'react';
import styled from 'styled-components';
import { ModalFooter, ModalContent, ConfirmButton } from '../Menu/MenuModal';
import { formatPrice } from '../Data/foodData';

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 84px;
  width: 340px;
  background: #fff;
  height: calc(100% - 84px);
  box-shadow: 0px 0px 5px 1px grey;
  z-index: 19;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(ModalContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

export function Order({orders}) {
  return (
    <OrderStyled>
    {orders.length === 0 ? (
      <OrderContent>
        Your order is looking pretty empty.
      </OrderContent>
    ) : (
      <OrderContent>
        <OrderContainer>
          Your Order:
        </OrderContainer>
        {orders.map(order => {
          return (
            <OrderContainer>
              <OrderItem>
                <div>1</div>
                <div>{order.name}</div>
                <div></div>
                <div>{formatPrice(order.price)}</div>
              </OrderItem>
            </OrderContainer>
          )
        })}
      </OrderContent>
    )

    }

      <ModalFooter>
        <ConfirmButton>Confirm</ConfirmButton>
      </ModalFooter>
    </OrderStyled>
  )
}
