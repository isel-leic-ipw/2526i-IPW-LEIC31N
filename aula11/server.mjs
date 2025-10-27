"use strict"

// 1 - preparar o express
import express from "express";
import webapi from "./students_webapi.mjs";
import cors  from 'cors';

const app = express();

//app.use(logMiddleware);
app.use(express.json());

//use middleware cors
app.use(cors());

let last_id = 0;




function logMiddleware(req, res, next) {
    console.log("Estou no middleware de log");
    let token = "XYZ123";

    if (token != "XYZ12") { 
        res.status(200).send("SITE UNAVAILABLE");
    } else {
        next();
    }

   
}

app.get ('/students', webapi.getStudents);



// 2- Lançar o servidor
app.listen(3000, () => {
    console.log('server Started!');
});


app.post('/students', (req, ret) => {

    last_id++;
    let dados = req.body;

    if (dados.name == undefined || dados.name == '') {
        ret.status(400).json({erro: 'Nome é obrigatório'});
        return;
    }
    // valida o atributo number
    if (dados.number == undefined || dados.number == '') {
        ret.status(400).json({erro: 'Número é obrigatório'});
        return;
    }


    dados.id = last_id;


    students.push(dados);

    ret.status(200).json(dados);

});





app.get ('/students/:id', (req,ret) => {
    let id= req.params.id;

    let student = students.find ((aluno) => {
        return (aluno.id == id);
    });

    if (student == undefined) {
        ret.status(404).send();
    }
   else {

    ret.status(200).json(student);
   }

});




/* Middleware exemplo */
// //res.status(200).send("SITE UNAVAILABLE");
app.use(myMiddleware);
function myMiddleware(req, res, next) {
    console.log('Passei pelo middleware');
        next();
}

