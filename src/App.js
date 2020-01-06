import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyles';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { MenuModal } from './Menu/MenuModal'
import { Order } from './Order/Order'
import { useOpenItem } from './Hooks/useOpenItem';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import { useAuthentication } from './Hooks/useAuthentication';
import { OrderModal } from './Order/OrderModal';
import { useOrderModal } from './Hooks/useOrderModal';
import { useOrderDrawer } from './Hooks/useOrderDrawer';
import { useOrderType } from './Hooks/useOrderType';
import { OrderTypeModal } from './Order/OrderTypeModal';
import { useStoreLocation } from './Hooks/useStoreLocation';
import { useDeliveryLocation } from './Hooks/useDeliveryLocation';

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();
  const auth = useAuthentication();
  const orderModal = useOrderModal();
  const orderDrawer = useOrderDrawer();
  const orderType = useOrderType();
  const storeLocation = useStoreLocation();
  const deliveryLocation = useDeliveryLocation();
  useTitle(openItem.openItem, orders.orders)

  return (
    <>
      <GlobalStyle />
      <Navbar {...auth} {...orderType} {...storeLocation} />
      <Banner/>
      <Menu {...openItem} {...orderDrawer} />
      <Order {...orders} {...openItem} {...auth} {...orderModal} {...orderDrawer}/>
      <MenuModal {...openItem} {...orders} {...storeLocation} {...orderType} {...deliveryLocation}/>
      <OrderModal {...orderModal} {...orders}/>
      <OrderTypeModal {...orderType} {...storeLocation} {...deliveryLocation}/>
    </>
  );
}

export default App;
