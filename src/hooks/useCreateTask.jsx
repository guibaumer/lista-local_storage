import { v4 as uuidv4 } from 'uuid';

export const useCreateTask = async(taskText) => {

    const storageTasks = JSON.parse(localStorage.getItem('tasks'))
    let tasksArray = [];

    if(storageTasks) {

        let duplicateTask = false;

        storageTasks.forEach((task) => {
            if(task.name === taskText) {
                duplicateTask = task.name;
            }
        });

        if(duplicateTask) return 'ERROR';

        tasksArray = [{name: taskText, id: uuidv4() }, ...storageTasks];
    } else {
        tasksArray = [{name: taskText, id: uuidv4()}];
    }  

    const jsonTasks = JSON.stringify(tasksArray);
    localStorage.setItem('tasks', jsonTasks);

    return taskText;
}