
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