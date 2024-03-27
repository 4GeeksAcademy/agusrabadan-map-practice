/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

   //write your code here
  

 let art = ["the", "your", "my", "one"]
 let adj = ["good", "happy", "nice", "lonely"]
 let noun= ["burger", "place", "sheep", "ball"]
 let dom= [".com", ".es", ".org", ".ar"]

 let doms=[art,adj,noun,dom]

 let textHTML= '<ul class="list-group">'

 doms.map(()=> 

 textHTML += `
 <li  class="list-group-item d-flex justify-content-between">
   <div>${art}${adj}${noun}${dom}</div>
   
 </li>
`
)
textHTML += '</ul>'

const domGen= document.querySelector("#doms");
domGen.innerHTML=textHTML; 

};

 
