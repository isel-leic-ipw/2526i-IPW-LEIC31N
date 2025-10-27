/*
npm install mocha
npm install assert
*/

import assert from 'assert';


describe ('Test - List Tasks', function () {
    it ('Tasks without user', async function (){
       
        let api_response = await fetch('http://localhost:3000/listTasks', {
            method: 'GET',
            headers: {}})


       assert.equal(api_response.status, 401);
    }),
        it ('Tasks with user with no tasks', async function (){
       
        let api_response = await fetch('http://localhost:3000/listTasks', {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer asdasdasdasdasdasd'
            }})
        let tasks = await api_response.json();

        assert.equal(api_response.status, 200);
        assert.equal(tasks.length, 0);
    }),
    
        it ('Tasks with user with tasks', async function (){
       
        let api_response = await fetch('http://localhost:3000/listTasks', {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer qweqweqweqweqwe'
            }})
        let tasks = await api_response.json();

        assert.equal(api_response.status, 200);
        assert.notEqual (tasks.length, 0);
    })
}
);