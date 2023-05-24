export const createRow =(buttons)=>{
    const botonera = buttons.reduce((acc ,item) =>acc + item,'' )
    return `<div class='row'>${botonera}</div>`
}