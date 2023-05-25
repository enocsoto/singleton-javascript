export const TaskManagement = (function () {
  let instance;
  let listTask = [];

  function addTask(task) {

    listTask.push(task)

  }
  function editTask(id, task) {

  }
  function deleteTask(id) {
    listTask = listTask.filter(item => item.id != id)
    return listTask
  }

  function listTasks() {
    return listTask
  }


  function createInstance() {
    // Lógica para crear la instancia
    const object = {
      addTask, editTask, deleteTask, listTasks
    };
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        // Si no existe una instancia, se crea una
        instance = createInstance();
      }
      return instance;
    }
  };
})();

