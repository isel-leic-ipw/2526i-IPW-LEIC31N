"use strict"

import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)
























/*

fs.readFile('/Users/joe/test.txt', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

*/
