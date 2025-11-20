
/*
Estrutura do Object
    { userId: 1, userName: 'Alice', token: "ddfdsfsfsdfsdfds"},
    { userId: 2, userName: 'Bob', token: "asdasdasdasdasdasd"},
    { userId: 3, userName: 'Charlie', token: "qweqweqweqweqwe"}
*/

let db_url = "http://localhost:9200/";
let users_index = "users";

// listar todos os utilizadores
async function listUsers() {

    // GET http://{{host}}:{{port}}/users/_search
    // Content-Type: application/json

    let url = db_url + users_index + "/_search"
    console.log("URL: " + url);

    let retorno = await fetch (url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    )

    let data = await retorno.json();

    let utilizadores = data.hits.hits

    console.log(utilizadores);

    return utilizadores;
}

// criar um novo utilizador
/*
// criar um novo utilizador
// PUT http://{{host}}:{{port}}/tasks/_doc/23
// Content-Type: application/json
// 
// { "nif": "123456789" ,"taskId": 999, "taskName": "Limpar a janela", "taskAssignedUser": "1"}
*/
async function createUser(userId, userName, token) {

    let user = { userId, userName, token }

    let url = db_url + users_index + "/_doc/" + userId
    console.log("URL: " + url);

    let retorno = await fetch (url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    )

    //users.push(user);
    
    return token;
}

export default {
    createUser,
    listUsers
};