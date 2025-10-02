


//--------------------

"use strict";

import express from 'express';

// criar uma app
const app = express();

// web estatica
app.use(express.static('./public'));

app.get('/api/eco', (req,res) => {
    let msg = "Olá Mundo!"

    console.log(msg);
    return res.send(msg);
});


app.listen(8080, () => {
    console.log('server Started!');
});

