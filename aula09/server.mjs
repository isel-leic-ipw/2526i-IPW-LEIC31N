"use strict"

// 1 - preparar o express
import express from "express";
const app = express();
app.use(express.json());

//TESTE



// 2 - Declarar a pasta do site estatico
app.use(express.static('/Users/Fstn/ISEL/IPW/2526i-IPW-LEIC31N/aula09/public'));

// 3 - Levantar servidor
app.listen(8080, () => {
    console.log('server Started!');
});


// api categorias
app.get('/api/categorias', (req,res) => {
    let catg_chuck;

    // chamar a api de categorias do chucknorris
    fetch ("https://api.chucknorris.io/jokes/categories").
    then (
        async (rest) => {
            catg_chuck = await rest.json();
            res.status(200).json(catg_chuck);
        }
    )

});


// api anedota
app.get('/api/anedota/:cat', (req,res) => {

   let cat= req.params.cat;
   let anedota;

   // chamar a api do chuck norris
   // https://api.chucknorris.io/jokes/random?category={category}

     // chamar a api de categorias do chucknorris
    fetch ("https://api.chucknorris.io/jokes/random?category=" + cat ).
    then (
        async (rest) => {
            anedota = await rest.json();
            res.status(200).json(anedota);
        }
    )  


});





