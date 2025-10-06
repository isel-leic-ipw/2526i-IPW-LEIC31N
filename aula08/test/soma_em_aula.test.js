/*
npm install mocha
npm install assert
*/

import assert from 'assert';
import {somatorio} from '../../aula02/modulo.js'

describe ('Teste01 - Testar a soma', function () {
    it ('Step 1', function (){
        let total = somatorio (10,5);
       assert.equal(total, 15);
    }),
        it ('Step 2', function (){
        let total = somatorio (10,5);
        assert.equal(total, 10);
    })
}
);