"user strict"
import express from 'express';
import users_webapi from './users_webapi.mjs';
import tasks_webapi from './tasks_webapi.mjs';
import users_data_mem from './users_data_mem.mjs';

const app = express();
const port = 3000;


app.use(securityHandler);
app.use(express.json());

function securityHandler(req, res, next) {

    let token = req.headers['authorization'];
    let user = users_data_mem.users.filter(user => ("Bearer " + user.token) == token);

    if (!user || user.length === 0) {
        res.status(401).json({ "error": "not authorized" });
        return;
    }

    req.user = user[0]
    next();
}

app.listen(port, () => {
    console.log("Server running!");
});

app.get('/listUsers', users_webapi.listUsers);
app.post('/createUser', users_webapi.createUser);

app.get('/listTasks', tasks_webapi.listTasks  );
app.post('/createTask', tasks_webapi.createTask );