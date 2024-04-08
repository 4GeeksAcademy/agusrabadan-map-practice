/* eslint-disable */
import "bootstrap";
import "./style.css";


window.onload = function () {
  
  let palo = ["♠", "♥", "♣", "♦"];
  
  let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
  let paloIndex= palo[Math.floor(Math.random()*palo.length)];
  let numeroIndex=numero [Math.floor(Math.random()*numero.length)];
  
  let color = ( paloIndex === "♥" || paloIndex === "♦") ? "text-danger" : "";
  
  document.querySelector('#cartas').innerHTML = 
  
  
  `
  <div class="card mb-4 mx-auto mt-2 rounded"  style="width: 280px;height: 300px;">
    <div class="text-start"><h1 id="header" class="${color}"  >${paloIndex}</h1></div>
    <div class"text-center"><h1 id="number">${numeroIndex}</h1></div>
    <div><h1 id="footer" class="${color}">${paloIndex}</h1></div>
  </div>
    
    <button type="button" onclick="location.reload();" class="btn btn-warning btn-lg">Generate Random Card</button>
   
  `
          
};   