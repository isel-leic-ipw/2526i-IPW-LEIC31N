function userInput(req, res) {

    let data = {title: "User Input Page"};
    res.render('user_input', data);

}


async function showHello(req, res) {

    let name = req.query.name;
    let age  = req.query.age;


    let chuck_request = await fetch('https://api.chucknorris.io/jokes/random')
    let joke = (await chuck_request.json()).value;

    joke = joke.replaceAll("Chuck Norris", name);



    let data = {title: "Hello Page",
                person : {"name": name, "age": age, "joke": joke }
               };

    res.render('hello', data);

}


export { userInput, showHello };