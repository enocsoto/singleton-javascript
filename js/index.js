import { dibujarRow ,eventosButton } from "./controller/index.js";

const dibujar =()=>{
    const divDerecha= document.querySelector('.derecha')
    divDerecha.innerHTML += dibujarRow()
    eventosButton()
}

dibujar()