/*
Receives a string array in propNames and an object array in objs. Returns a new object array with objects produced by applying the filterProperties function with propNames to each object in objs.

NOTE: In this implementation, the usage of any cycle instruction (for/while) or the Array.forEach method reduces the grade by 50%.

*/

import { filterProperties } from "./exe1.js"

// function
function filterPropertiesN(propNames,objs) {
    
  
    return objs.map(
        //call filterProperties(props, o)
        elem => {
            var a = filterProperties(propNames,elem)
            var b = a.reduce (
                (saco,elem)=> ({...saco, ...elem}),
                {}
            )

            //numbers.reduce(getSum, 0)

            return b;
        }
    ).filter (elem => elem.length!=0)

}


// test
const objs = [
   {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
   {b: 'Hulk', a: [1,2,3], d: {x: 10}, e: 2, g: false}, 
   {x: 'Vision', y: false}
]

const props = ['b', 'd', 'g', 'a']
const objsFiltered = filterPropertiesN(props, objs)

console.log (objsFiltered)

