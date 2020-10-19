import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
       <Switch>
          <Route path="/" component = {Home} exact />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
