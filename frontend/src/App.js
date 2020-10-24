import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Home from './containers/Home/Home.jsx';
import SignUp from './containers/User/SignUp/SignUp.jsx';
import SignIn from './containers/User/SignIn/SignIn.jsx';
import './App.css';
import store from './redux/store.js';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
