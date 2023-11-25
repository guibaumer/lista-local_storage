
export const useDeleteTask = async(taskText) => {

    const storageTasks = await JSON.parse(localStorage.getItem('tasks'))
    // console.log(storageTasks)
    // let tasksArray = [];

    const tasksArray = storageTasks.filter((task) => {
        if(task !== taskText) return task;
        // tasksArray.push(task);
    });

    const jsonTasks = JSON.stringify(tasksArray);
    console.log(jsonTasks)
    localStorage.setItem('tasks', jsonTasks);

    return taskText;
}