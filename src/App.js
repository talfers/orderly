import React, {useState} from 'react';
import { GlobalStyle } from './Styles/GlobalStyles';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { MenuModal } from './Menu/MenuModal'
import { Order } from './Order/Order'

function App() {
  const [openItem, setOpenItem] = useState();
  return (
    <>
      <GlobalStyle />
      <Navbar/>
      <Banner/>
      <Menu setOpenItem={setOpenItem} />
      <Order/>
      <MenuModal openItem={openItem} setOpenItem={setOpenItem}/>
    </>
  );
}

export default App;
