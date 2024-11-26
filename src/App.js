import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Homepage } from './pages/Homepage';
import { Helppage } from './pages/Helppage';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { Pproduct } from './components/Pproduct';

import { Productpage } from './pages/Productpage';

import { Store, StoreProvider } from './pages/StoreProvider';
import { Cart } from './pages/Cart';
import { Address } from './pages/Address';
import { Finaloder } from './pages/Finaloder';
import { Login } from './pages/Login';




function App() {
  return (
  
<div className='overflow-hidden'>
<BrowserRouter>
<StoreProvider>
      <Navbar/>
      <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path='products' element={<Productpage/>}/>
           <Route path='help' element={<Helppage/>}/>
           <Route path='login' element={<Login/>}/>
           <Route path='product/:id' element={<Pproduct />} />
           <Route path='cart' element={<Cart />} />
           <Route path='address' element={<Address />} />
           <Route path='final' element={<Finaloder />} />

           

           
           
           
           
      </Routes>

      <Footer/>
      </StoreProvider>
    </BrowserRouter>

</div>
  );
}

export default App;
