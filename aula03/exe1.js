/*
Receives a string array in propNames and an object in obj. Returns a new object with the properties from obj whose names are present in propNames. If propNames contains names that do not exist in obj, those properties are not added to the returned object.

*/



"use strict";

// Function
function filterProperties(propNames,obj) {
    var novo;

    novo = propNames.map(
        elem => ({[elem]: obj[elem]})
    ).filter(
        elem => {
        
            return elem[Object.keys(elem)[0]] != undefined
        }
    )

    return novo;
}

// TESTE

const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'}

const props = ['b', 'd', 'g', 'a']
const oFiltered = filterProperties(props, o)

//console.log (oFiltered);

module.exports = {
  filterProperties,
}