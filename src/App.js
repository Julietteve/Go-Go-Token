import React from 'react';
import {History, Main} from './pages'
import {createGlobalStyle} from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  
const GlobalStyle = createGlobalStyle`
  html,body {
    width:100%;
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
  @media only screen and (min-width:1025px){
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1; 
      }
      
      ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 60px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #555; 
      } 
    }
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
