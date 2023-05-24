import { dibujarRow ,eventosButton } from "./controller/index.js";

const dibujarCalculadora =()=>{
    const divDerecha= document.querySelector('.derecha')
    divDerecha.innerHTML += dibujarRow()
    eventosButton()
}

dibujarCalculadora()