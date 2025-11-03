"user strict"
import express from 'express';
import { engine } from 'express-handlebars';
import user_pages from './user_pages.mjs';


const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
    console.log("Server running!");
});

// Configuração do Handlebars
app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', '/Users/Fstn/ISEL/IPW/2526i-IPW-LEIC31N/aula15/views/');



//  route
app.get('/user', user_pages.getUser);