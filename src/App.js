import React from 'react';
import {History, Main} from './pages'
import {createGlobalStyle} from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  
const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
    font-family: 'Spartan', sans-serif;
  }
`
  return (
   <BrowserRouter>
      <GlobalStyle/>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/history' component={History}/>
          </Switch>
   </BrowserRouter>
  );
}

export default App;
