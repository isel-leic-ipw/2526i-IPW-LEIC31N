import users_services from './users_services.mjs';


function listUsers(req, res) {

    let users = users_services.listUsers();

    res.json(users);
}

// POST 
function createUser(req, res) {

    console.log(req.body);

    let user = req.body;
    let token = users_services.createUser(user);
    res.json({ token: token });
}

export default {
    listUsers,
    createUser
};