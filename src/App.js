import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
li{
  list-style: none;
  font-size: 27px;
  color: black;

  &:hover{
    color: #9C9C9C;
  }
}
ul{
  justify-content: space-evenly;
  display: flex;
}
`


export default function App(){
  return(
    <div>
    <GlobalStyle/>
    <Router>
      <ul>
        <Link to="/">
          <li>Página Inicial</li>
        </Link>
        <Link to="/Work">
          <li>Projetos</li>
        </Link>
        <Link to="/Contact">
          <li>Contato</li>
        </Link>
      </ul>

      <Routes>
        <Route path="/" element={< Home/>} />
         <Route path="/Work" element={< Work/>} />
         <Route path="/Contact" element={< Contact/>} />
      </Routes>
    </Router>
    </div>
  )
}