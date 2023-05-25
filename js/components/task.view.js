export const pintarTask = (task)=>{
    return `<li>
        <label>${task.titulo}</label>
        <button value=${task.id} class='deleteTask'>Eliminar</button>
        <button value=${task.id} class='editarTask'>Editar</button>
    </li>`
}   