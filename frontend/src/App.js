import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Home from './containers/Home/Home.jsx';
import SignUp from './containers/User/SignUp/SignUp.jsx';
import SignIn from './containers/User/SignIn/SignIn.jsx';
import './App.css';
import board from './containers/Admin-Dashboard/board.jsx';



function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
      <Header/>
      
       <Switch>
           <Route path="/" component = {Home} exact />
           <Route path="/signUp" component = {SignUp} exact />
           <Route path="/signIn" component = {SignIn} exact />
           <Route path="/admin" component = {board} exact />
       </Switch>
     
      </BrowserRouter>
    </div>
   
  );
}

export default App;
