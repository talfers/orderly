import React from 'react';
import styled from 'styled-components';
import { MenuItemLabel } from './MenuGrid'

const Modal = styled.div`
  width: 500px;
  height: 500px;
  background: white;
  position: fixed;
  top: 150px;
  z-index: 9;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
`

const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background: black;
  opacity: 0.7;
  z-index: 4;
`

const ModalBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({img}) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
`

const ModalBannerLabel = styled(MenuItemLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`

export function MenuModal({openItem, setOpenItem}) {
  return (
    openItem ? (
      <>
        <ModalShadow onClick={() => setOpenItem()}/>
        <Modal>
          <ModalBanner img={openItem.img}>
            <ModalBannerLabel>{openItem.name}</ModalBannerLabel>
          </ModalBanner>

        </Modal>
      </>
    ) : null

  )
}
