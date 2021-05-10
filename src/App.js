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
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
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
