/* eslint-disable */
import "bootstrap";
import "./style.css";


window.onload = function () {
  
  
  let palo = ["♠", "♥", "♣", "♦"];
  
  let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
  
  document.querySelector('#cartas').innerHTML = 
  
  
  `
  <div class="card mb-4 mx-auto mt-5" style="width: 180px;height: 220px;">
    <div class="card-header text-start"><h1>${palo[Math.floor(Math.random()*palo.length)]}</h1></div>
    <div class"card-number text-center"><h1>${numero[Math.floor(Math.random()*numero.length)]}</h1></div>
  </div>
  
  <button type="button" onclick="location.reload();" class="btn btn-warning btn-lg">Generate Random Card</button>
  `
          
};   