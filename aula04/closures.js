
/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). When you create a closure, you gain access to an outer function’s scope from an inner function. Closures are automatically created every time a function is defined in JavaScript.
*/

function getVotes () {
    let vote =0;

    function vote_fun ()    {
        vote++;
        console.log ("Votes: " + vote);
    }
    return vote_fun;

}

let vote = getVotes();

vote();
vote();

