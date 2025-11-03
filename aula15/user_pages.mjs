function getUser(req, res)  {


    let data = {title:"Test page", 
                name: 'John!', 
                favourite_color: 'green',
                isMale: false,
                children: [
                    {name: 'Ana', age: 10},
                    {name: 'Miguel', age: 1},
                    {name: 'Joana', age: 12}
                ],
                profile:'https://www.isel.pt/comunidade/estudantes/informacoes-academicas/horarios' };

    res.render('dark', data);

}

export default {
    getUser
};