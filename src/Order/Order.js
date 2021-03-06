import React from 'react';
import styled from 'styled-components';
import { ModalFooter, ModalShadow, ModalContent, ConfirmButton } from '../Menu/MenuModal';
import { formatPrice } from '../Data/foodData';
import { getPrice } from '../Menu/MenuModal';
import { pizzaRed } from '../Styles/colors';

const database = window.firebase.database();

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 88px;
  width: 400px;
  background: #fff;
  height: calc(100% - 88px);
  box-shadow: 0px 0px 5px 1px grey;
  z-index: 5;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  -webkit-transition: width 0.3s ease;
  ${({open}) => open ? `
    width: 340px;` :
    `width: 0px;`
  }
  @media only screen and (max-width: 700px) {
    max-width: calc(100vw - 70px);
    height: calc(100% - 88px);
  }

`;

const OrderOpenButton = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  top: 12px;
  left: -70px;
  min-height: 40px;
  width: 54px
  padding: 4px 8px;
  background: ${pizzaRed};
  font-size: 16px;
  color: #fff;
  border-radius: 8px 0px 0px 8px;
  cursor: pointer;
`;

const OrderShadow = styled(ModalShadow)`
  display: none;
  z-index: 4;
  @media only screen and (max-width: 900px) {
    display: block;
  }
`

const OrderContent = styled(ModalContent)`
  padding: 20px;
  height: 100%;
  @media only screen and (max-width: 700px) {
    height: calc(100% );
  }
`;

const OrderContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid grey;
  ${({editable}) => editable ? `
    cursor: pointer;
    transition: background 0.2s ease;
    &:hover {
      background: #f0f0f0;
    }
  ` : null}
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 140px 30px 60px;
  justify-content: space-between;
`;

const OrderItemDetail = styled.div`
  color: grey;
  font-size: 10px;
`;

const TrashCan = styled.img`
  width: 20px;
  cursor: 'pointer';
  margin-right: 10px;
`

const sendOrder = (orders, {email, displayName}) => {
  var newOrderRef = database.ref("orders").push();
  const newOrders = orders.map(order => {
    return Object.keys(order).reduce((acc, orderKey) => {
      if(!order[orderKey]) {
        return acc;
      }
      if(orderKey === 'toppings') {
        let toppings = order[orderKey].filter(t => t.checked);
        toppings = toppings.map(topping => topping.name)

        return {
          ...acc,
          [orderKey]: toppings
        }
      }
      return {
        ...acc,
        [orderKey]: order[orderKey]
      }
    }, {})
  })
  console.log(newOrders);
  newOrderRef.set({
    order: newOrders,
    email,
    displayName
  })

}

export function Order({orders, setOrders, setOpenItem, loggedIn, login, setOrderModalOpen, orderDrawerOpen, setOrderDrawerOpen, isMobile}) {

  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0)
  const tax = subtotal * 0.07;
  const total = tax + subtotal;

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  }

  return (
    <>
      {orderDrawerOpen ? <OrderShadow onClick={() => setOrderDrawerOpen()}/> : <div/>}
      <OrderStyled mobile={isMobile} open={orderDrawerOpen}>
      <OrderOpenButton
        onClick={() => setOrderDrawerOpen(!orderDrawerOpen)}
      >{orderDrawerOpen? `Order  >`:`<  Order`}</OrderOpenButton>
      {orders.length === 0 ? (
        <OrderContent>
          Your order is looking pretty empty.
          {
            //<img src="/img/empty.png" />
          }
        </OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>
            Your Order:
          </OrderContainer>
          {orders.map((order, index) => {
            return (
              <OrderContainer editable key={index} onClick={() => {setOpenItem({...order, index})}}>
                <OrderItem >
                  <div>{order.quantity}</div>
                  <div>{order.name}</div>
                  <TrashCan
                    onClick={(e) => {
                      deleteItem(index);
                      e.stopPropagation();
                    }}
                    src="/img/trash.png"
                  />
                  <div>{formatPrice(getPrice(order))}</div>
                </OrderItem>
                <OrderItemDetail>
                {
                  order.toppings.filter(t => t.checked)
                    .map(topping => topping.name)
                    .join(", ")
                }</OrderItemDetail>
                {order.choice ? <OrderItemDetail>{order.choice}</OrderItemDetail> : <div/>}
              </OrderContainer>
            )
          })}
          <OrderContainer>
            <OrderItem>
              <div/>
              <div>Subtotal:</div>
              <div>{formatPrice(subtotal)}</div>
            </OrderItem>
            <OrderItem>
              <div/>
              <div>Tax:</div>
              <div>{formatPrice(tax)}</div>
            </OrderItem>
            <OrderItem>
              <div/>
              <div>Total:</div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )

      }

        <ModalFooter>
          <ConfirmButton hide={!orderDrawerOpen}  disabled={orders.length === 0} onClick={() => {
            if(loggedIn){
              setOrderModalOpen(true);
              sendOrder(orders, loggedIn);
            } else {
              login()
            }}}
            >
              Confirm
            </ConfirmButton>
        </ModalFooter>
      </OrderStyled>
    </>
  )
}
