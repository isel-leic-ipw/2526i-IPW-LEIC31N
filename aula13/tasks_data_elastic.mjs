
let db_url = "http://localhost:9200/";
let tasks_index = "tasks";

// listar todos os utilizadores
async function listTasks(userId) {
    //let filtered = tasks.filter(task => task.taskAssignedUser === userId);
    
    let url = db_url + tasks_index + "/_search"
    console.log("URL: " + url);

    let retorno = await fetch (url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    )

    let data = await retorno.json();

    let tarefas = data.hits.hits

    return tarefas;


}

// criar um novo utilizador
async function createTask(taskId, taskName, taskAssignedUser) {

    let task = { taskId, taskName, taskAssignedUser }
    //tasks.push(task);
    let url = db_url + tasks_index + "/_doc/" + taskId
    console.log("URL: " + url);

    let retorno = await fetch (url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    }
    )

    //users.push(user);


    return taskId;
}

export default {
    createTask,
    listTasks
};