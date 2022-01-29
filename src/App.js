import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react'
import { CryptoContext } from './CryptoContext';
import CryptoApi from './components/CryptoApi/CryptoApi';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [price, setPrice] = useState([])
  const listCryptoPrice = { price, setPrice }
  return (
    <CryptoContext.Provider value={listCryptoPrice}>
      <Header />
      <CryptoApi />
      <Footer />
    </CryptoContext.Provider>
  );
}

export default App;
