export const useCreateTask = async(taskText) => {

    const storageTasks = JSON.parse(localStorage.getItem('tasks'))
    let tasksArray = [];

    if(storageTasks) {

        let duplicateTask = false;

        storageTasks.forEach((task) => {
            if(task === taskText) {
                duplicateTask = task;
            }
        });

        if(duplicateTask) return 'ERROR';

        tasksArray = [taskText, ...storageTasks];
    } else {
        tasksArray = [taskText];
    }  

    const jsonTasks = JSON.stringify(tasksArray);
    localStorage.setItem('tasks', jsonTasks);

    return taskText;
}