import React from 'react';
import Main from "./pages/Main";
import {createGlobalStyle} from 'styled-components'

function App() {
  
const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
    background-color: #fafa
  }
`

  return (
   <div>
     <GlobalStyle/>
        <Main/>
   </div>
  );
}

export default App;
