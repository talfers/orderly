import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, ModalShadow, ModalContent, ModalFooter, ConfirmButton } from '../Menu/MenuModal';
import { ChoiceContainer, RadioButton, Label } from '../Menu/Choices';
import { stores } from '../Data/storeData';
import { pizzaRed } from '../Styles/colors';

const ModalTitle = styled.h3`
  margin-bottom: 4px;
`;

const FormLabel = styled.label`
  font-size: 12px;
`;


const StoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;
  margin: 12px 0;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StoreContainer = styled.div`
  border-radius: 6px;
  border: lightgrey solid 1px;
  margin: 0;
  cursor: pointer;
  padding: 4px 10px;
  &:hover {
    background: #f0f0f0;
  }
  ${({store}) => store ? `
    background: #f0f0f0;
  `: null}
`;

const StoreTitle = styled.h3`
  margin: 4px 0;
`;

const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DeliveryInputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

const DeliveryInput = styled.input`
  border-radius: 4px;
  border: lightgrey solid 1px;
  display: inline-block;
  height: 30px;
  margin: 12px 0px;
  width: 200px;
  font-size: 16px;
`;

const SumbitButton = styled.button`
  border-radius: 4px;
  padding: 6px 10px;
  background: ${pizzaRed}
  color: #fff;
  display: inline;
  margin: 8px 0;
  height: 30px;
  cursor: pointer;
  border: none;
`;

const initialAddress = {
  address1: '',
  address2: '',
  city: '',
  state: '',
  zipcode: ''
}

export function OrderTypeModal({orderType, setOrderType, store, setStore, destination, setDestination}) {

  const [address, setAddress] = useState(initialAddress);
  return (
      <>
        { !orderType.decision ?
          <>
          <ModalShadow />
          <Modal>
            <ModalContent>
              <h2>Please select your order type:</h2>
              <ChoiceContainer>
                <RadioButton
                  type="radio"
                  id={"delivery"}
                  name="orderType"
                  value={"delivery"}
                  checked={orderType.selection === "delivery"}
                  onChange={(e) => {
                    const selection = {...orderType, selection:'delivery'}
                    setOrderType(selection)
                  }}
                />
                <Label htmlfor={"orderType"}>Delivery</Label>
              </ChoiceContainer>
              <ChoiceContainer>
                <RadioButton
                  type="radio"
                  id={"pickup"}
                  name="orderType"
                  value={"pickup"}
                  checked={orderType.selection === "pickup"}
                  onChange={(e) => {
                    const selection = {...orderType, selection:'pickup'}
                    setOrderType(selection)
                  }}
                />
                <Label htmlfor={"orderType"}>Pickup</Label>
              </ChoiceContainer>
            {!orderType.selection ?
            <div/>  :
              <>
                  {
                    orderType.selection === "delivery" ?
                      <DeliveryContainer>
                        <ModalTitle>Enter Address:</ModalTitle>
                        <DeliveryInputContainer>
                          <FormLabel htmlfor="address1"></FormLabel>
                          <DeliveryInput
                            style={{width: '75%'}}
                            id="address1"
                            name="destination"
                            value={address.address1}
                            onChange={(e) => {
                              const newValue = { ...address, address1: e.target.value }
                              setAddress(newValue);
                            }}
                          />
                          <FormLabel htmlfor=""></FormLabel>
                          <DeliveryInput
                            style={{width: '20%'}}
                            id="address2"
                            name="destination"
                            value={address.address2}
                            onChange={(e) => {
                              const newValue = { ...address, address2: e.target.value }
                              setAddress(newValue);
                            }}
                          />
                          <FormLabel htmlfor=""></FormLabel>
                          <DeliveryInput
                            style={{width: '50%'}}
                            id="city"
                            name="destination"
                            value={address.city}
                            onChange={(e) => {
                              const newValue = { ...address, city: e.target.value }
                              setAddress(newValue);
                            }}
                          />
                          <DeliveryInput
                            style={{width: '15%'}}
                            id="state"
                            name="destination"
                            value={address.state}
                            onChange={(e) => {
                              const newValue = { ...address, state: e.target.value }
                              setAddress(newValue);
                            }}
                          />
                          <DeliveryInput
                            style={{width: '30%'}}
                            id="zipcode"
                            name="destination"
                            value={address.zipcode}
                            onChange={(e) => {
                              const newValue = { ...address, zipcode: e.target.value }
                              setAddress(newValue);
                            }}
                          />
                          <SumbitButton onClick={() => {
                            console.log(address);
                            setDestination(address);
                            setAddress(initialAddress);
                          }}
                          >
                            Submit
                          </SumbitButton>
                        </DeliveryInputContainer>
                        <div>{destination ?
                          <>
                            <span style={{color: 'grey'}}>Delivering to: </span>
                            <span>{destination.address1} </span>
                            {destination.address2? <span>- {destination.address2} </span>:<span></span>}
                            <span>{destination.city}, </span>
                            <span>{destination.state} </span>
                            <span>{destination.zipcode}</span>
                          </>
                          : <span/>}</div>
                      </DeliveryContainer> :
                      <div/>
                  }
                  <h3>Selection Location:</h3>
                  <StoreGrid>
                    {
                      stores.map((s, i) => {
                        return (
                          <div key={s.id}>
                            <StoreContainer
                              store={store ? s.location === store.location : false}
                              onClick={() => {
                                setStore(s);
                              }}
                              key={s.id}
                            >
                              <StoreTitle>{s.location}</StoreTitle>
                              <div>{s.address}</div>
                              <div>{s.city}, {s.state} {s.zipcode}</div>
                              <div>{s.phone}</div>
                            </StoreContainer>
                          </div>
                        )
                      })
                    }
                    </StoreGrid>

            </>}
            </ModalContent>

            <ModalFooter>
              <ConfirmButton
                disabled={!(orderType.selection !== 'none' && store) || (orderType.selection === "delivery" && !destination) }
                onClick={() => {
                  if(orderType.selection !== 'none' && store) {
                    const confirmedOrderType = {...orderType, decision: true}
                    setOrderType(confirmedOrderType);
                  }

                }}
              >
                Confirm
              </ConfirmButton>
            </ModalFooter>
          </Modal>
          </> :
          <div/>
        }

      </>
  )
}
