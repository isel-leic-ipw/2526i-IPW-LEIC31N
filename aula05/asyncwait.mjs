"use strict"
import { readFile, promises } from 'node:fs'; 


 async function lerFicheiro  () {
    let ficheiro =  await promises.readFile("./2526i-IPW-LEIC31N/aula 04/alunos.txt", 'utf-8');

    //ficheiro.then (processa_dados)
    processa_dados(ficheiro);
}

function processa_dados (err,data) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data)
    return data;
}

//
//


console.log("Inicio do programa");
lerFicheiro().then((x)=>{
  console.log("Fin do programa!");
});





