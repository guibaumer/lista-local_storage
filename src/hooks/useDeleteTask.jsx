
export const useDeleteTask = async(id) => {

    const storageTasks = await JSON.parse(localStorage.getItem('tasks'));
    let deleted = false;
    // console.log(storageTasks)
    // let tasksArray = [];

    const tasksArray = storageTasks.filter((task) => {
        if(task.id !== id) {
            return task;
        } else {
            deleted = task.name;
        }
        // tasksArray.push(task);
    });

    const jsonTasks = JSON.stringify(tasksArray);
    console.log(jsonTasks)
    localStorage.setItem('tasks', jsonTasks);

    return deleted;
}