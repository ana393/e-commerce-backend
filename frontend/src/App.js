import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Home from './containers/Home/Home.jsx';
import SignUp from './containers/User/SignUp/SignUp.jsx';
import SignIn from './containers/User/SignIn/SignIn.jsx';

import './App.css';
import Board from './containers/Admin-Dashboard/Board/board.jsx';

import Products from './components/AllProducts/Products.jsx';
//import NewProduct from './components/NewProduct/newProduct.jsx';
import Cart from './containers/cart/cart.jsx';
import Checkout from './containers/Checkout/Checkout.jsx';
import UpdateProfile from './containers/User/UpdateProfile/UpdateProfile.jsx';


function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
      <Header/>
    
       <Switch>
            <Route path="/" component = {Home} exact />
            <Route path="/admin" component = {Board}   exact/>
            <Route path="/signUp" component = {SignUp} exact />
            <Route path="/signIn" component = {SignIn} exact />
            <Route path="/users/:_id" component = { UpdateProfile } exact />
            <Route path="/cart"  component = { Cart } exact />
            <Route path="/products/:_id" component = { Products } exact />
             <Route path="/checkout" component = { Checkout } exact />
            
       </Switch>
     
      </BrowserRouter>
    </div>
   
  );
}

export default App;
