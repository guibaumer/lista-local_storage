
export const useCreateTask = async(taskText) => {

    const storageTasks = JSON.parse(localStorage.getItem('tasks'))
    let tasksArray = [];

    if(storageTasks) {
        tasksArray = [taskText, ...storageTasks];
    } else {
        tasksArray = [taskText];
    }  

    const jsonTasks = JSON.stringify(tasksArray);
    localStorage.setItem('tasks', jsonTasks);

    return taskText;
}