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


const database = window.firebase.database();

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();
  const auth = useAuthentication();
  const orderModal = useOrderModal();
  useTitle(openItem.openItem, orders.orders)

  return (
    <>
      <GlobalStyle />
      <Navbar {...auth} />
      <Banner/>
      <Menu {...openItem} />
      <Order {...orders} {...openItem} {...auth} {...orderModal}/>
      <MenuModal {...openItem} {...orders} />
      <OrderModal {...orderModal} {...orders}/>
    </>
  );
}

export default App;
