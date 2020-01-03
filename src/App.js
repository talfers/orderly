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

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();
  useTitle(openItem.openItem, orders.orders)
  return (
    <>
      <GlobalStyle />
      <Navbar/>
      <Banner/>
      <Menu {...openItem} />
      <Order {...orders} {...openItem} />
      <MenuModal {...openItem} {...orders} />
    </>
  );
}

export default App;
