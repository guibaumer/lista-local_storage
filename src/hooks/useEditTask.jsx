export const useEditTask = (newTask, oldTask) => {

    console.log(newTask, oldTask);

    const storageTasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksArray = [];

    storageTasks.filter((task) => {
        if(task === oldTask) {
            task = newTask;
        }

        tasksArray.push(task);
    });

    const jsonTasks = JSON.stringify(tasksArray);
    localStorage.setItem('tasks', jsonTasks);
}