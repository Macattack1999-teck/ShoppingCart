import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import ShoppingCart from './Components/ShoppingCart';
import GrandTotalProvider from './Providers/GrandTotalProvider';
import TotalItemsProvider from './Providers/TotalItemsProvider';

function App() {
  return (
    <div className="App">
      <GrandTotalProvider>
        <TotalItemsProvider>
          <Nav />
          <ShoppingCart />
          <Footer />
        </TotalItemsProvider>
      </GrandTotalProvider>
    </div>
  );
}

export default App;
