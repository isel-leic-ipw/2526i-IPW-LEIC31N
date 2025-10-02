


//--------------------

"use strict";

import express from 'express';

// criar uma app
const app = express();
app.use(express.json());
// web estatica
app.use(express.static('/Users/Fstn/ISEL/IPW/2526i-IPW-LEIC31N/aula07/public'));

// Quey parameters
app.get('/api/class', (req,res) => {
    
    let name= req.query.name;
    let msg = "Olá " + name;

    console.log(msg);
     res.status(200).send({"name": msg});
});

// path Parameters
app.get('/api/class/:id', (req,res) => {
    
    let id= req.params.id;
    let msg = "get: Olá " + id;

    console.log(msg);
    res.status(200).json(msg);
});

// path Parameters
app.post('/api/class', (req,res) => {
    
    const {name}= req.body;
    let msg = "post: Olá " + name;

    let class_obj = {"name": "IPW"};

    console.log(msg);
    res.status(200).json(name);
});




app.listen(8080, () => {
    console.log('server Started!');
});

