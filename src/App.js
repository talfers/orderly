import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
  h1, h2, h3, h4 {
    font-family: 'Girassol', cursive;
    letter-spacing: 3px;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar/>
      <Banner/>
      <div className="App">Hello from Orderly</div>
    </>
  );
}

export default App;
