import task_data from './tasks_data_mem.mjs';

function listTasks(userId) {

    let tasks = task_data.listTasks(userId);


    return tasks;
}

// criar um novo tasks
function createTask(task) {
    return task_data.createTask(task.taskId, task.taskName, task.taskAssignedUser);
}

export default {
    createTask,
    listTasks
};