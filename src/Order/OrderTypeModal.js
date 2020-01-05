import React from 'react';
import { Modal, ModalShadow, ModalContent, ModalFooter, ConfirmButton } from '../Menu/MenuModal';
import { ChoiceContainer, RadioButton, Label } from '../Menu/Choices';

export function OrderTypeModal({orderType, setOrderType}) {
  return (
    <>
      {
        orderType === 'none' ?
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
                checked={false}
                onChange={() => {}}
              />
              <Label htmlfor={"orderType"}>Delivery</Label>
              </ChoiceContainer>
              <ChoiceContainer>
              <RadioButton
                type="radio"
                id={"pickup"}
                name="orderType"
                value={"pickup"}
                checked={false}
                onChange={() => {}}
              />
              <Label htmlfor={"orderType"}>Pickup</Label>
              </ChoiceContainer>

            </ModalContent>
            <ModalFooter>
              <ConfirmButton>Confirm</ConfirmButton>
            </ModalFooter>
          </Modal>
        </> :
        <div/>
      }
    </>
  )
}
