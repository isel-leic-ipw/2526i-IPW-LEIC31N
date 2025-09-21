"use strict"
import { readFile, promises } from 'node:fs'; 

// caso lambda callback
readFile("./2526i-IPW-LEIC31N/aula 04/alunos.txt", 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data)
});


// caso named function
function processa_dados (err,data) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data)
    return data;
}
readFile("./2526i-IPW-LEIC31N/aula 04/alunos.txt", "utf-8",processa_dados);

// Promises
let promessa = promises.readFile("./2526i-IPW-LEIC31N/aula 04/alunos.txt", 'utf-8');
promessa
    .then (processa_dados)
    .then(()=> console.log("Real Finished!"))


// DONE!
console.log ("all Done")