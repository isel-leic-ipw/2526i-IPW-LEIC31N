
function validateArrayElements (arr, elementValidator) {
    // funcao de exemplo
    
    
}

const numbers = [2, 3, 4, 5];
console.log(validateArrayElements(numbers, n => n % 2 === 0));
/*
[
 { value: 2, isValid: true },
 { value: 3, isValid: false },
 { value: 4, isValid: true },
 { value: 5, isValid: false }
]
*/

