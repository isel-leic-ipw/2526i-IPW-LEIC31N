"use strict"

// 1 - preparar o express
import express from "express";
const app = express();
app.use(express.json());

// 2 - Declarar a pasta do site estatico
app.use(express.static('/Users/Fstn/ISEL/IPW/2526i-IPW-LEIC31N/aula09/public'));

// 3 - Levantar servidor
app.listen(8080, () => {
    console.log('server Started!');
});


// api categorias
app.get('/api/categorias', (req,res) => {
    let catg_chuck;
    //let output = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"];

    // chamar a api de categorias do chucknorris
    let retorno = fetch ("https://api.chucknorris.io/jokes/categories").
    then (
        async (rest) => {
            catg_chuck = await rest.json();
            console.log(catg_chuck);
            res.status(200).json(catg_chuck);
        }
    )

});


