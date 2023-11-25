export const useEditTask = (newTask, oldTask) => {

    console.log(newTask, oldTask);

    const storageTasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksArray = [];

    storageTasks.filter((task) => {
        if(task.name === oldTask) {
            task.name = newTask;
        }

        tasksArray.push(task);
    });

    const jsonTasks = JSON.stringify(tasksArray);
    localStorage.setItem('tasks', jsonTasks);
}