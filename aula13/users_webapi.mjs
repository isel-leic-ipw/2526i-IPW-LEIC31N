import users_services from './users_services.mjs';


async function listUsers(req, res) {

    let users = await users_services.listUsers();

    console.log(users);

    res.json(users);
}

// POST 
async function createUser(req, res) {

    console.log(req.body);

    let user = req.body;
    let token = await users_services.createUser(user);
    res.json({ token: token });
}

export default {
    listUsers,
    createUser
};