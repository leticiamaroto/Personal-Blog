import React from 'react';
import { createGlobalStyle } from 'styled-components';
import todoflix from "../assets/todoflix.jpg";
import desafiofinal from "../assets/desafiofinal.jpg";
import portflow from "../assets/portflow.jpg";


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
  margin-left: 45vw;
  font-size: 35px;
  margin-top: 9vh;
}
.todoflix{
  width: 300px;
  height: 300px;
  background-color: #363636;
  margin-top: 90px;
  border-radius: 10px;
  box-shadow: 4px 4px 30px 10px grey;
}
.cardsONU{
  width: 300px;
  height: 300px;
  background-color: #363636;
  margin-left: 30vw;
  margin-top: -48vh;
  position: absolute;
  border-radius: 10px;
  box-shadow: 3px 3px 30px 10px grey;

}
.portflow{
  width: 300px;
  height: 300px;
  background-color: #363636;
  margin-left: 60vw;
  margin-top: -48vh;
  position: absolute;
  border-radius: 10px;
  box-shadow: 3px 3px 30px 10px grey;
}
.project{
  margin-left: 8.8vw;
  margin-top: 15vh;
}
img{
  width: 260px;
  height: 150px;
  border-radius: 20px;
  margin-left: 18px;
  margin-top: 18px;
}
h2{
  color: #E8E8E8;
  text-align: center;
  font-size: 27px;
  margin-top: 9px;
}
button{
  cursor: pointer;
  margin-left: 103px;
  margin-top: 20px;
  width: 100px;
  height: 27px;
  background-color: #B5B5B5;
  border: hidden;
  border-radius: 4px;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #1C1C1C;
}
a{
  color: black;
}
`

export default function Work() {
  return (
    <div>
      <GlobalStyle/>
     <h1>Projetos</h1>
     <section className="project">
      <div className="todoflix">
        <img src={todoflix} alt="imagem do projeto Todoflix"/>
        <h2>Todoflix</h2>
        <button><a target="_blank" href="https://todoflixvnw.netlify.app/">Abrir</a></button>
      </div>

      <div className="cardsONU">
      <img src={desafiofinal} alt="imagem do projeto baseado nos cards do site da ONU Brasil"/>
      <h2>Clone Cards ONU</h2>
      <button><a target="_blank" href="https://leticiamaroto-desafiofinalonu.netlify.app/">Abrir</a></button>
      </div>

      <div className="portflow">
      <img src={portflow} alt="imagem do projeto Portflow"/>
      <h2>Portflow</h2>
      <button><a target="_blank" href="https://leticiamaroto.github.io/Portflow/">Abrir</a></button>
      </div>
     </section>
    </div>
  );
}
