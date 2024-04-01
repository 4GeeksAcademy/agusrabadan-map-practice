/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let palos = ["♠", "♣", "♥", "♦"];
  let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  for(let i=0; i<3; i++){
    for(let j=0; j<12; j++){
      
    } 
  };
      

  let text = `<div class="card mt-5 mx-auto" style="width: 18rem;">
  <h3 class="card-title mt-3">${palos[i]}${numeros[j]}</h3>
  <div class="card-body">
  <img src="https://image.spreadshirtmedia.net/image-server/v1/compositions/T6A1PA5835PT17X47Y34D302514130W21795H21795Cx000000:xFF0638/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/simbolos-de-cartas-poker-camiseta-hombre.jpg" class="card-img-top" alt="...">
  </div>
  <h3 class="card-title">${palos}${numeros}</h3>
    
</div>`

  document.querySelector("#java").innerHTML = text

};