import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Home from './containers/Home/Home.jsx';
import SignUp from './containers/User/SignUp/SignUp.jsx';
import SignIn from './containers/User/SignIn/SignIn.jsx';
import './App.css';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Header/>
       <Switch>
          <Route path="/" component = {Home} exact />
          <Route path="/signup" component = {SignUp} exact />
           <Route path="/signin" component = {SignIn} exact />
       </Switch>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
