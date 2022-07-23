import React from 'react';
import { createGlobalStyle } from 'styled-components';
import dev from "../assets/dev.jpg"


const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background-color: #EEE9E9;
}
h1{
  color: black;
  margin-top: 15vh;
  margin-left: 50vw;
  font-size: 50px;
}
img{
  width: 265px;
  height: 265px;
  margin-top: 40px;
  border-radius: 50%;
  margin-left: 9vw;
  box-shadow: 3px 3px 30px 20px grey;
  display: flex;
  position: absolute;
}
p{
  font-size: 23px;
  width: 380px;
  margin-left: 46vw;
  margin-top: 10vh;
}
`
export default function Home() {
  return (
    <div>
      <GlobalStyle/>

      <div className="icon">
     <img src={dev} alt=""/>
     </div>

      <h1>Bem-vindo</h1> 
      <p>Olá! Meu nome é Letícia, tenho 21 anos e sou uma desenvolvedora front-end. Bem-vindo ao meu blog!</p>
     
     
    </div>
  );
}
