import { dibujarRow } from "./controller/index.js";

const dibujar =()=>{
    const divDerecha= document.querySelector('.derecha')
    divDerecha.innerHTML += dibujarRow()
}

dibujar()