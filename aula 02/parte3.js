/*
Parte 3 - Arrays - Funções
    forEach - Revisão
    filter
    map
    reduce
    Composição
*/

var meu_array = ["jose","andré","filipa", "marisa"];

//meu_array.forEach (elem=> console.log(elem));

// filter
meu_array
    .filter(elem=>elem.includes("i"))
    .map(elem=>elem.toUpperCase())
    .forEach (elem=> console.log(elem));


console.log(
    [1,2,3,4,5].reduce((a,b)=>a+b)
);