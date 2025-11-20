import user_data from './users_data_mem.mjs';
//import user_data from './users_data_elastic.mjs';

async function listUsers() {

    let users = await user_data.listUsers();

    return users;
}

// criar um novo utilizador
async function createUser(user) {
    return await user_data.createUser(user.userId, user.userName, user.token);
}

export default {
    createUser,
    listUsers
};