"use strict"

import express from "express";
const app = express();
app.use(express.json());

app.use(express.static('/Users/Fstn/ISEL/IPW/2526i-IPW-LEIC31N/aula07'));

const port = 9090  ;

app.listen(port, (req,ret) => {
console.log("server started");

});


app.post('/classes/:classname', (req,res) => {

    const {location} = req.body;
    let classname = req.params.classname




    let msg = "Hello " + location + " FROM Class " + classname;

    res.status(200).json(
        {'name': msg}
    );

});



app.get('/classes/:classname', (req,res) => {

    let classname ='';

    classname = req.params.classname;



    let msg = "Hello " + classname;

    res.status(200).json(
        {'name': msg}
    );

});



app.get('/classes', (req,res) => {

    let classname ='';

    classname = req.query.name + ' ' + req.query.surname;



    let msg = "Hello " + classname;

    res.send(msg);

});







console.log ("Done!");