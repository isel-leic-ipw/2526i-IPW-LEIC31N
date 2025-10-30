   
/*
    try {
     let a  = 1;
     a = Integer.parse("ola");
    } catch (e) {
      throw new Error(`Invalid!!!! ${e.message}`);
    }

*/

async function chamaAPI () {

    try {
        let output_fetch = await fetch('https://api.chucknorris.io/jokes/random');
        return (await output_fetch.json()).value
    } 
    catch (e) {
        return "VAZIO";
        
    }

}





let retorno = await chamaAPI();
console.log (retorno);

