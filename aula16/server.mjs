"use strict"
import express from 'express';
import { engine } from 'express-handlebars';
import * as hello_pages from './hello_pages.mjs';


const app = express();
const port = 3000;
app.use(express.json())

app.listen(port, () => {
    console.log("Server running!");
});


app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', '/Users/Fstn/ISEL/IPW/2526i-IPW-LEIC31N/aula16/views');

// Define routes
app.get('/'         , hello_pages.userInput);
app.post('/hello'   , hello_pages.showHello);
app.get('/hello'   , hello_pages.showHello);
