export const createTask = (titulo)=>{
    return {
        id : Date.now(),
        titulo,
        estado: 'creado',
    }
}