const tasks = [
    { taskId: 1, taskName: 'Limpar o pó', taskAssignedUser: "1"},
    { taskId: 2, taskName: 'Lavar a louça', taskAssignedUser: "2"},
];

// listar todos os utilizadores
function listTasks(userId) {
    let filtered = tasks.filter(task => task.taskAssignedUser === userId);
    return filtered;
}

// criar um novo utilizador
function createTask(taskId, taskName, taskAssignedUser) {

    let task = { taskId, taskName, taskAssignedUser }
    tasks.push(task);
    return taskId;
}

export default {
    createTask,
    listTasks
};