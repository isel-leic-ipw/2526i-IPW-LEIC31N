import user_data from './users_data_mem.mjs';
//import user_data from './users_data_bd.mjs';

function listUsers() {

    let users = user_data.listUsers();
    return users;
}

// criar um novo utilizador
function createUser(user) {
    return user_data.createUser(user.userId, user.userName, user.token);
}

export default {
    createUser,
    listUsers
};