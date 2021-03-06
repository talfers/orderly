import React from 'react';
import styled from 'styled-components';
import { MenuItemLabel } from './MenuGrid';
import { pizzaRed } from '../Styles/colors';
import { Title } from '../Styles/title';
import { formatPrice } from '../Data/foodData';
import { QuantityInput } from '../Order/QuantityInput';
import { useQuantity } from '../Hooks/useQuantity';
import { Customizations } from './Customizations';
import { useCustomizations } from '../Hooks/useCustomizations';
import { useChoice } from '../Hooks/useChoice';
import { Choices } from './Choices';


export const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 550px;
  display: flex;
  background: white;
  top: 150px;
  z-index: 19;
  max-height: calc(100vh - 150px);
  left: calc(50% - 275px);
  @media only screen and (max-width: 700px) {
    width: 320px;
    left: calc(50% - 160px);
    max-height: calc(100vh - 240px);
  }
`;

export const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background: black;
  opacity: 0.7;
  z-index: 9;
`;

const ModalBanner = styled.div`
  min-height: 100px;
  height: 200px;
  margin-bottom: 20px;
  ${({img}) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`;

const ModalBannerLabel = styled(MenuItemLabel)`
  top: ${({img}) => (img ? `200px;` : `20px;`)}
  font-size: 30px;
  padding: 5px 40px;
`;

export const ModalContent = styled.div`
  overflow: auto;
  padding: 0px 40px;
  padding-bottom: 80px;
  @media only screen and (max-width: 700px) {
    padding-right: 24px;
    padding-left: 34px;
  }
`;

export const ModalFooter = styled.div`
  min-height: 60px;
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
  ${({disabled}) => (disabled ?
    `
      opacity: .5;
      background: grey;
      pointer-events: none;
    ` : null
  )}
  ${({hide}) => (hide ?
    `
      display: none
    ` : null
  )}
`;


export function getPrice(order) {
  let toppingPrice = order.toppings.reduce((total, topping) => {
    if(topping.checked) {
      return total + topping.price;
    } else {
      return total
    }
  }, 0)
  return order.quantity * (order.price + toppingPrice) ;
}

function canCustomize(item) {
  return item.toppings && item.toppings.length > 0;
}

function MenuModalContainer({openItem, setOpenItem, orders, setOrders, store, orderType, destination}) {
  const isEditing = openItem.index > -1;
  const quantity = useQuantity(openItem && openItem.quantity);
  const chosenRadio = useChoice(openItem.choice);
  const toppings = useCustomizations(openItem.toppings ? openItem.toppings : 'none', isEditing);
  const order = {
    ...openItem,
    quantity: quantity.quantity,
    toppings: toppings.toppings,
    choice: chosenRadio.choice,
    store,
    orderType: orderType.selection,
    destination
  };
  const closeModal = () => {
    setOpenItem();
  }

  const addToOrder = () => {
    setOrders([...orders, order]);
    closeModal();
  }

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[order.index] = order;
    setOrders(newOrders);
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
            {
              canCustomize(openItem) ?
              <>
                <h3>Customize your order:</h3>
                <Customizations {...toppings}/>
              </> :
              <div/>
            }
            {
              openItem.choices ?
                <Choices openItem={openItem} chosenRadio={chosenRadio} />
              : <div/>
            }

          </ModalContent>
          <ModalFooter>
            <ConfirmButton
              disabled={openItem.choices && !chosenRadio.choice}
              onClick={isEditing ? () => editOrder(openItem) : () => addToOrder()}
            >
              {isEditing? "Update Order" : "Add to Order:"} {formatPrice(getPrice(order))}
            </ConfirmButton>
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
