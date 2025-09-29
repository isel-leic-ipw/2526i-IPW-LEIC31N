// get categories, // get joke, // log joke, // async wait // Exceptions
// https://api.chucknorris.io/
"use strict"

import fetch from 'node-fetch'; 

let retorno = fetch ("https://api.chucknorris.io/jokes/random").
then (
  async (rest) => {
      let valor = await rest.json();
      console.log(valor.value);
      
   }
)


//console.log((await retorno.json()).value);






// -------------------------- BACKUP --------
/*
"use strict"
import fetch from 'node-fetch'; 

async function my_call() {
    const url = 'https://api.chucknorris.io/jokes/random';
    const headers = {
        'Authorization': 'Bearer ******',
        'Content-Type': 'application/json'
    };
    const body = {}

    // catrgorias
    let cat  = await fetch ("https://api.chucknorris.io/jokes/categories",{methos: 'GET'});
    console.log(await cat.json());
    console.log("------\n")
    


    const resposta = await fetch("https://api.chucknorris.io/jokes/random?category=career", {
      method: 'GET',
      headers: headers,
      //body: body
    });

    const dados = await resposta.json();
    console.log(dados.value);

}


my_call();
*/
