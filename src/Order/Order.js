import React from 'react';
import styled from 'styled-components';
import { ModalFooter, ModalContent, ConfirmButton } from '../Menu/MenuModal';
import { formatPrice } from '../Data/foodData';
import { getPrice } from '../Menu/MenuModal';

const database = window.firebase.database();

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 84px;
  width: 340px;
  background: #fff;
  height: calc(100% - 84px);
  box-shadow: 0px 0px 5px 1px grey;
  z-index: 5;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(ModalContent)`
  padding: 20px;
  height: 100%;
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
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const OrderItemDetail = styled.div`
  color: grey;
  font-size: 10px;
`;

const TrashCan = styled.img`
  width: 20px;
  cursor: 'pointer';
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
  newOrderRef.set({
    order: newOrders,
    email,
    displayName
  })

}

export function Order({orders, setOrders, setOpenItem, loggedIn, login, setOrderModalOpen}) {
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
    <OrderStyled>
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
            <OrderContainer editable key={index}>
              <OrderItem onClick={() => {setOpenItem({...order, index})}}>
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
        <ConfirmButton disabled={orders.length === 0} onClick={() => {
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
  )
}
