import { TaskCotroller } from "./controller/task.controller.js";
import { pintarTask } from "./components/index.js";
const input = document.querySelector('form')
const eventos = (arrayButons) => {
    document.querySelectorAll('.deleteTask').forEach(item => item.addEventListener('click', (e) => {
        TaskCotroller.deleteTask(e.target.value);
        render()
    }))
}
input.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('.taskInput').value
    TaskCotroller.createTask(input)
    render()
})

const render = () => {
    const tareas = TaskCotroller.listTask().map(pintarTask)
    const listDesornedad = document.querySelector('#taskList')
    listDesornedad.innerHTML = ''
    listDesornedad.innerHTML += tareas.reduce((acc, item) => acc + item, '')
    eventos()
}




