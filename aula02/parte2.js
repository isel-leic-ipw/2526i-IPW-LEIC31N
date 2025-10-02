/*function progresso(i) {
    console.log(i);
}

function progresso2(i) {
    console.log(">>> " +  i);
}

// incrementa um a cada elemento do array
function incremento (a, f) {
    var somado =[];

    for (let i=0; i<a.length;i++) {
        somado.push(a[i]+1);
        f(i);
    }
    return somado;
}


incremento ([5,5,5],progresso2)

*/

function escreve_log() {
    const d = new Date();
    return ((x) => console.log(d + " | " + x));
}

var logger = escreve_log();

logger("José")





























/*
function copiar(de, para, info) {

    para =[];
    let i=0;
    // copia ficticia
    de.forEach(element => {
        para.push(element)
        info(++i,de.length);
    });
    return para;

}



function progresso (i, maximo) {
    console.log(`${(i/maximo)*100}%`)
} 

copiar([1,2,3,4,5],[],progresso);


function escreve_consola () {
    const d = new Date();

    return (x) => console.log(`[${d}] ${x}`);
}

escreve_consola()("ola");
*/