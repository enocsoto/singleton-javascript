import { createRow, createButton } from "../model/index.js";

export const dibujarRow = () => {
    const buttons = []
    for (let i = 0; i < 11; i++) {
        buttons.push(createButton(i))
    }
    const arrayFilas = [
        createRow(buttons.slice(0, 2)),
        createRow(buttons.slice(3, 5)),
        createRow(buttons.slice(6, 8)),
        createRow(buttons.slice(9, 11))
    ]
    return arrayFilas.reduce((acc, item) => acc + item , [])
}

console.log(dibujarRow())