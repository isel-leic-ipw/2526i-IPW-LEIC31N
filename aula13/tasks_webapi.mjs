import tasks_services from './tasks_services.mjs';   


async function listTasks(req, res) {

    let user = req.user;
    console.log("User " + user.userName + " is listing tasks.");
    let tasks = await tasks_services.listTasks(user.userId);

    res.json(tasks);
}

// POST 
async function createTask(req, res) {

    console.log(req.body);

    let task = req.body;
    let task_id = await tasks_services.createTask(task);
    res.json({ "taskId": task_id });
}

export default {
    listTasks,
    createTask
};