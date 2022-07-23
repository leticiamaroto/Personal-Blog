import React from 'react';
import { createGlobalStyle } from 'styled-components';
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background-color: #EEE9E9;
}
.hidingContact{
  color: black;
  margin-left: 45vw;
  font-size: 35px;
  margin-top: 8vh;
}
p{
  font-size: 23px;
  margin-left: 39vw;
  margin-top: 4vh;
  
}
.contactBox{
  width: 42vw;
  background-color: #363636;
  height: 48vh;
  border-radius: 50px;
  box-shadow: 20px 20px 90px 20px grey;
  margin-left: 29vw;
  margin-top: 5vh;
}
img{
  width: 40px;
  height: 40px;
  margin-left: 80px;
  margin-top: 9vh;
  cursor: pointer;
}
input{
  width: 30vw;
  height: 6vh;
  margin-left: 80px;
  margin-top: 35px;
  background-color: #D3D3D3;
  border: hidden;
  border-radius: 7px;
}
input::placeholder{
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
button{
  margin-left: 18vw;
  margin-top: 27px;
  display: flex;
  width: 5.8vw;
  height: 4.9vh;
  background-color: #000000;
  border: hidden;
  border-radius: 4px;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: white;
  padding: 17px;
  cursor: pointer;
}
`

export default function Contact() {
  return (
    <div>
      <GlobalStyle/>
     <h2 className="hidingContact">Contato</h2>
     <p>Me encontre nas redes sociais</p>

     <div className="contactBox">
      <input type="text" name="name" placeholder="Nome" required/>
      <input type="text" name="email" placeholder="Email" required/>
      <input type="text" name="message" placeholder="Mensagem" required/>
      <button>Enviar</button>

      <a target="_blank" href="https://www.linkedin.com/in/let%C3%ADcia-maroto-749936226/">
      <img src={linkedin} alt="Ícone de LinkedIn"/>
      </a>

      <a target="_blank" href="https://www.instagram.com/letimarotos/">
     <img src={instagram} alt="Ícone de Instagram"/>
     </a>

     <a target="_blank" href="/">
     <img src={facebook} alt="Ícone de Facebook"/>
     </a>

     <a target="_blank" href="/">
     <img src={twitter} alt="Ícone de Twitter"/>
     </a>
     </div>
    </div>
  );
}
