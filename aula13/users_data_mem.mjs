const users = [
    { userId: 1, userName: 'Alice', token: "ddfdsfsfsdfsdfds"},
    { userId: 2, userName: 'Bob', token: "asdasdasdasdasdasd"},
    { userId: 3, userName: 'Charlie', token: "qweqweqweqweqwe"}
];

// listar todos os utilizadores
function listUsers() {
    return users;
}

// criar um novo utilizador
function createUser(userId, userName, token) {

    let user = { userId, userName, token }
    users.push(user);
    return token;
}

export default {
    users,
    createUser,
    listUsers
};