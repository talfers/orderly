import React from 'react';
import styled from 'styled-components';
import { Modal, ModalShadow, ModalContent, ModalFooter, ConfirmButton } from '../Menu/MenuModal';

const ModalTitle = styled.div`
  display: flex;
  align-items: center;
`

const Truck = styled.img`
  height: 70px;
  display: inline;
  margin-right: 8px;
`

export function OrderModal({setOrders, setOrderModalOpen, orderModalOpen}) {
  return (
    orderModalOpen ?
    <>
    <ModalShadow/>
    <Modal>
      <ModalContent>
        <ModalTitle><Truck src="/img/truck.png" /><h2>Your order is on the way...</h2></ModalTitle>
        <p style={{margin: "0px"}}>You have been emailed confirmation of your order. Thanks for choosing Orderly!</p>
      </ModalContent>
      <ModalFooter>
        <ConfirmButton onClick={() => {
          setOrders([]);
          setOrderModalOpen();
        }}
        >
          I'm Still Hungry
        </ConfirmButton>
      </ModalFooter>
    </Modal>
    </> :
    <div/>
  )

}
