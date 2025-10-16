"use strict"

// 1 - preparar o express
import express from "express";

const app = express();
app.use(express.json());

let students = [];

let last_id = 0;


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



app.get ('/students', (req,ret) => {
    ret.status(200).json(students);

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