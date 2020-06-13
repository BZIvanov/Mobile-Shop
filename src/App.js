import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Shop } from './components/pages';
import { GlobalStyles } from './components/atoms';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
