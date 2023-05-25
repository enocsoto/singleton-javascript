import { TaskManagement, createTask} from "../model/index.js";

export const TaskCotroller = {

    createTask:(titulo )=>{

        TaskManagement.getInstance().addTask(createTask(titulo))    
           
    },
    listTask:()=>{
       
        return TaskManagement.getInstance().listTasks()
        
    },
    deleteTask:(id)=>{
        return TaskManagement.getInstance().deleteTask(id)
    }

}

