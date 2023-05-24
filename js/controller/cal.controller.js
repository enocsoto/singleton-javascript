import { createRow, createButton } from "../model/index.js";

export const dibujarRow = () => {
    const buttons = []
    for (let i = 0; i < 12; i++) {
        buttons.push(createButton(i))
    }
    const arrayFilas = [
        createRow(buttons.slice(0, 3)),
        createRow(buttons.slice(3, 6)),
        createRow(buttons.slice(6, 9)),
        createRow(buttons.slice(9, 12))
    ]
    return arrayFilas.reduce((acc, item) => acc + item , [])
}

const addList = (leyenda)=>{
    document.querySelector('.izquierda').value+= `${leyenda}`
}

export const eventosButton =()=>{
    document.querySelectorAll('.calcu-button').forEach(item =>{
        item.addEventListener('click', ()=> addList(item.innerText))
    })
}



