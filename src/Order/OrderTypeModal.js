import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, ModalShadow, ModalContent, ModalFooter, ConfirmButton } from '../Menu/MenuModal';
import { ChoiceContainer, RadioButton, Label } from '../Menu/Choices';
import { stores } from '../Data/storeData';
import { pizzaRed } from '../Styles/colors';

const ModalTitle = styled.h3`
  margin-bottom: 6px;
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
`;

const DeliveryInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, calc((100%/6)));
  grid-template-areas:
    "add1 add1 add1 add1 add2 add2"
    "city city city state zip zip"
    "phone phone phone phone ext ext";
  @media only screen and (max-width: 900px) {
    grid-template-areas:
      "add1 add1 add1 add1 add2 add2"
      "city city city city state state"
      "zip zip phone phone phone ext";

  }
`;

const AddressInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 12px;
  margin-top: 8px
  margin-bottom: 4px;
`;

const AddressInput = styled.input`
  border-radius: 4px;
  border: lightgrey solid 1px;
  height: 30px;
  margin-right: 6px;
  font-size: 16px;
  padding-left: 3px;
  ${({error}) => error ? `border: 1px red solid`: null}
  &#zipcode, &#ext, &#address2 {
    margin-right: 0;
  }
  @media only screen and (max-width: 900px) {
    &#ext, &#state, &#address2 {
      margin-right: 0;
    }
    &#zipcode {
      margin-right: 6px;
    }
  }
`;

const SumbitButton = styled.button`
  border-radius: 4px;
  padding: 6px 10px;
  background: ${pizzaRed}
  color: #fff;
  display: inline;
  margin: 12px 0;
  height: 36px;
  font-size: 16px;
  cursor: pointer;
  border: none;
`;

const initialAddress = {
  address1: '',
  address2: '',
  city: '',
  state: '',
  zipcode: '',
  phone: '',
  ext: ''
}

const Errors = styled.div`
  color: red;
`;

export function OrderTypeModal({orderType, setOrderType, store, setStore, destination, setDestination}) {

  const [address, setAddress] = useState(initialAddress);
  const [errors, setErrors] = useState([]);
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
                <Label
                  onClick={() => {
                    const selection = {...orderType, selection:'delivery'}
                    setOrderType(selection)
                  }}
                  htmlfor={"orderType"}
                >
                  Delivery
                </Label>
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
                <Label
                  onClick={() => {
                    const selection = {...orderType, selection:'pickup'}
                    setOrderType(selection)
                  }}
                  htmlfor={"orderType"}
                >
                  Pickup
                </Label>
              </ChoiceContainer>
            {!orderType.selection ?
            <div/>  :
              <>
                  {
                    orderType.selection === "delivery" ?
                      <DeliveryContainer>
                        <ModalTitle>Enter Address:</ModalTitle>
                        <DeliveryInputContainer>
                          <AddressInputContainer style={{gridArea: 'add1'}}>
                            <FormLabel htmlfor="address1">Address:</FormLabel>
                            <AddressInput
                              error={errors.includes('address1')}
                              id="address1"
                              name="destination"
                              value={address.address1}
                              onChange={(e) => {
                                const newValue = { ...address, address1: e.target.value }
                                setAddress(newValue);
                              }}
                            />
                          </AddressInputContainer>

                          <AddressInputContainer style={{gridArea: 'add2'}}>
                            <FormLabel htmlfor="address2">Address 2:</FormLabel>
                            <AddressInput
                              id="address2"
                              name="destination"
                              value={address.address2}
                              onChange={(e) => {
                                const newValue = { ...address, address2: e.target.value }
                                setAddress(newValue);
                              }}
                            />
                          </AddressInputContainer>
                          <AddressInputContainer style={{gridArea: 'city'}}>
                            <FormLabel htmlfor="city">City:</FormLabel>
                            <AddressInput
                              error={errors.includes('city')}
                              id="city"
                              name="destination"
                              value={address.city}
                              onChange={(e) => {
                                const newValue = { ...address, city: e.target.value }
                                setAddress(newValue);
                              }}
                            />
                          </AddressInputContainer>
                          <AddressInputContainer style={{gridArea: 'state'}}>
                            <FormLabel htmlfor="state">State:</FormLabel>
                            <AddressInput
                              error={errors.includes('state')}
                              id="state"
                              name="destination"
                              value={address.state}
                              onChange={(e) => {
                                const newValue = { ...address, state: e.target.value }
                                setAddress(newValue);
                              }}
                            />
                          </AddressInputContainer>
                          <AddressInputContainer style={{gridArea: 'zip'}}>
                            <FormLabel htmlfor="zipcode">Zipcode:</FormLabel>
                            <AddressInput
                              error={errors.includes('zipcode')}
                              id="zipcode"
                              name="destination"
                              value={address.zipcode}
                              onChange={(e) => {
                                const newValue = { ...address, zipcode: e.target.value }
                                setAddress(newValue);
                              }}
                            />
                          </AddressInputContainer>
                          <AddressInputContainer style={{gridArea: 'phone'}}>
                            <FormLabel htmlfor="phone">Phone:</FormLabel>
                            <AddressInput
                              error={errors.includes('phone')}
                              id="phone"
                              name="destination"
                              value={address.phone}
                              onChange={(e) => {
                                const newValue = { ...address, phone: e.target.value }
                                setAddress(newValue);
                              }}
                            />
                          </AddressInputContainer>
                          <AddressInputContainer style={{gridArea: 'ext'}}>
                            <FormLabel htmlfor="ext">Ext:</FormLabel>
                            <AddressInput
                              id="ext"
                              name="destination"
                              value={address.ext}
                              onChange={(e) => {
                                const newValue = { ...address, ext: e.target.value }
                                setAddress(newValue);
                              }}
                            />
                          </AddressInputContainer>

                        </DeliveryInputContainer>
                        <SumbitButton

                          onClick={() => {
                            if(!address.address1 || !address.city || !address.state || !address.phone || !address.zipcode) {
                              let currentErrs = [];
                              Object.keys(address).forEach(key => {
                                if(address[key] === '' && key !== 'ext' && key !== 'address2') {
                                  currentErrs.push(key)
                                }
                              })
                              setErrors(currentErrs)
                            } else {
                              setDestination(address);
                              setAddress(initialAddress);
                              setErrors([]);
                            }

                          }}
                        >
                          Submit
                        </SumbitButton>

                        <div>
                          {errors.length > 0 ?
                            <Errors>
                              Must enter:
                              {errors.map(error => {
                                return <span> {error} </span>
                              })}
                              !
                            </Errors> : <div/>}
                        </div>

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
                  <ModalTitle>Selection Location:</ModalTitle>
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
