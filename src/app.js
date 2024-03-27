/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  //write your code here


  let art = ["the", "your", "my", "one"]
  let adj = ["good", "happy", "nice", "lonely"]
  let noun = ["burger", "place", "sheep", "ball"]
  let dom = [".com", ".es", ".org", ".ar"];


//Metodo for
  
let textFor = '<ul class="list-group">'
  textFor += '<li class="list-group-item> Using for length </li>';

  for (let i = 0; i < art.length; i++); {
    for (let j = 0; j < adj.length; j++); {
      for (let k = 0; k < noun.length; k++); {
        for (let l = 0; l < dom.length; l++); {
          textFor += '<li class="list-group-item">' + pronoun[i] + adj[j] + noun[k] + dom[l] + "</li>"
        }
      }
    }
  }


  textFor += "</ul>"

  document.querySelector("#for").innerHTML = textFor

  //Map
  




};


