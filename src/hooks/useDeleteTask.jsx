
export const useDeleteTask = async(taskText) => {

    const storageTasks = JSON.parse(localStorage.getItem('tasks'))
    let tasksArray = [];

    storageTasks.filter((task) => {
        if(task !== taskText) tasksArray.push(task);
    });

    const jsonTasks = JSON.stringify(tasksArray);
    localStorage.setItem('tasks', jsonTasks);

    return taskText;
}