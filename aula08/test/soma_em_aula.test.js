/*
npm install mocha
npm install assert
*/

import assert from 'assert';
import * as aritmetica from '../../aula02/modulo.js'

describe ('Teste01 - Testar a soma', function () {
    it ('Step 1', function (){
        let total = aritmetica.somatorio (10,5);
       assert.equal(total, 15);
    }),
        it ('Step 2', function (){
        let total = aritmetica.somatorio (10,5);
        assert.notEqual(total, 10);
    })
}
);


describe ('Teste02 - Testar Chuck', function () {
    it ('Step 1', async function (){
        let total = aritmetica.somatorio (10,5);

        let response = await fetch('https://api.chucknorris.io/jokes/randomx');
        let status= response.status;
        let data = await response.json();

        assert.equal(status, 200);
    }),
        it ('Step 2', function (){
        let total = aritmetica.somatorio (10,5);
        assert.notEqual(total, 10);
    })
}
);