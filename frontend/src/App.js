import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Home from './containers/Home/Home.jsx';
import SignUp from './containers/User/SignUp/SignUp.jsx';
import SignIn from './containers/User/SignIn/SignIn.jsx';
import './App.css';
import Board from './containers/Admin-Dashboard/board.jsx';
import AllProducts from './containers/Admin-Dashboard/AllProducts/product.jsx';


function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
      <Header/>
      
       <Switch>
           <Route path="/" component = {Home} exact />
           <Route path="/signUp" component = {SignUp} exact />
           <Route path="/signIn" component = {SignIn} exact />
           <Route path="/admin" component = {Board} exact />
            <Route path="/products" component = { AllProducts } exact />
       </Switch>
     
      </BrowserRouter>
    </div>
   
  );
}

export default App;
