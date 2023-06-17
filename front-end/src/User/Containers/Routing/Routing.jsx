import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserProductList from '../ProductList/ProductList';
import Cart from '../Cart/Cart';
import Pages from '../../Pages/Pages';
import UserFront from '../../Pages/UserFront';
import Checkout from '../Checkout/Checkout';
import Payment from '../Payment/Payment';

const Routing = ({handleAddProduct,cartItems,handleRemoveProduct,handleCartClearence}) => {
  
  return (
    <div>
      <Routes>
      <Route path='/'  element ={<Pages cartItems={cartItems}/>}>
        <Route index element ={<UserFront/>}/>
      <Route path='/menu' element={<UserProductList handleAddProduct={handleAddProduct}/>}/>
      <Route path='/cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}
      handleCartClearence={handleCartClearence}/>}/>
      <Route path='/checkout' element={<Checkout cartItems={cartItems}/> }/>
      <Route path='/payment' element={<Payment cartItems={cartItems}/>}/>
      </Route>
      </Routes>
    </div>
  )
}

export default Routing