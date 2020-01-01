import React from 'react';
import styled from 'styled-components';
import { ModalFooter, ModalContent, ConfirmButton } from '../Menu/MenuModal';


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

`

export function Order({orders}) {
  return (
    <OrderStyled>
    {orders.length === 0 ? (
      <OrderContent>
        Your order is looking pretty empty.
      </OrderContent>
    ) : (
      <OrderContent>{orders.length}</OrderContent>
    )

    }

      <ModalFooter>
        <ConfirmButton>Confirm</ConfirmButton>
      </ModalFooter>
    </OrderStyled>
  )
}
