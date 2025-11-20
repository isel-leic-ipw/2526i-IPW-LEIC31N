//import task_data from './tasks_data_mem.mjs';
import task_data from './tasks_data_elastic.mjs';

async function listTasks(userId) {

    let tasks = await task_data.listTasks(userId);


    return tasks;
}

// criar um novo tasks
async function createTask(task) {
    return await task_data.createTask(task.taskId, task.taskName, task.taskAssignedUser);
}

export default {
    createTask,
    listTasks
};