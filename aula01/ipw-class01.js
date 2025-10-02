// aula 01
"use strict"
var pessoa = {
    nome : "josé",
    idade : 23,
    notas_ipw : [14,15,16],
    falar: function () {return "ola " + this.nome}
}

console.log(pessoa.falar());







console.log("Olá IPW");
var a =1;
console.log(++a);

var s = "eu sou uma string"
console.log(s);

var b =false;

console.log(!b || true);

var x;
console.log(x!=x);

console.log(typeof b);



"use strict"


// 1 - Declaração de váriáveis
inteiro =1;
{
    let a="fui declarada com let";

    {
    console.log(a)
    }

}

var a =1;
if (a==1)  {
    console.log("é 1");
}


a = 1;
do {
    a++;
    console.log(a);
} while (a<10) ;


"use strict";
ipw
for (let i=1; i<10; i++) {
    console.log(i);
}



var a=1;
switch (a) {
    case 1:
        console.log(a);
        break;
    default:
        break
}


for (i=1;i<8;i++) {
    str="";
    for (z=1;z<i;z++) {
        str += "x";
    }
    console.log(str);
}



soma = function(a,b) {
    return a+b;
}

var x = (a,b) => {return a+b};

prettyPrint("ola: " + soma(1,2,3));

 function prettyPrint (str) {
    console.log("--------");
    console.log(str);
    console.log("--------");
}

console.log (x(1,2,3));



fatorial = function (a) {
    if (a<=1) {
        return a
    } else {
        return a*fatorial(a-1);
    }
}

console.log(fatorial(3));


console.log(`soma ${1+1}`)



let listOfNumbers = [2, 3, 5, 7, 11];
listOfNumbers.push(12)

// foreach
listOfNumbers.forEach ((x)=> {console.log(x)});

let xpto = {
    nome: "jose",
    idade: 19,
    comoTeChamas: function () {
        return this.nome;
    }
}

console.log(xpto.comoTeChamas());
