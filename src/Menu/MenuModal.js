import React from 'react';
import styled from 'styled-components';
import { MenuItemLabel } from './MenuGrid';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';
import { formatPrice } from '../Data/foodData';
import { QuantityInput } from '../Order/QuantityInput';
import { useQuantity } from '../Hooks/useQuantity';

const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 500px;
  display: flex;
  background: white;
  top: 150px;
  z-index: 19;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
`;

const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background: black;
  opacity: 0.7;
  z-index: 9;
`;

const ModalBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({img}) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
`;

const ModalBannerLabel = styled(MenuItemLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`;

export const ModalContent = styled.div`
  overflow: auto;
  height: 100px;
  padding: 0px 40px;
`;

export const ModalFooter = styled.div`
  height: 60px;
  box-shadow: 0px -4px 4px 0px lightgrey;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background: ${pizzaRed};
`;

export function getPrice(order) {
  return order.quantity * order.price;
}

function MenuModalContainer({openItem, setOpenItem, orders, setOrders}) {
  const quantity = useQuantity(openItem && openItem.quantity);
  const order = {
    ...openItem,
    quantity: quantity.quantity
  };
  function closeModal() {
    setOpenItem();
  }
  function addToOrder() {
    setOrders([...orders, order]);
    closeModal();
  }
  return (
      <>
        <ModalShadow onClick={() => closeModal()}/>
        <Modal>
          <ModalBanner img={openItem.img}>
            <ModalBannerLabel>{openItem.name}</ModalBannerLabel>
          </ModalBanner>
          <ModalContent>
            <QuantityInput quantity={quantity} />
          </ModalContent>
          <ModalFooter>
            <ConfirmButton onClick={() => addToOrder()}>Add to Order: {formatPrice(getPrice(order))}</ConfirmButton>
          </ModalFooter>
        </Modal>
      </>
  )
}

export function MenuModal(props) {
  if(props.openItem) {
    return <MenuModalContainer {...props} />;
  } else {
    return null;
  }
}
