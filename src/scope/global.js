// variables

var a ; //declarando 
var b = 'b'; // declaramos y asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion


// Global Scope: Se dice que una variable está en el sope global cuando está declarada fuera de una función o de un bloque. También son conocidas como variables globales. Puedes acceder a este tipo de variables desde cualquier parte de tu código, ya sea dentro o fuera de una función.

var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();


function countries (){
 country = 'Colombia'; // global
 console.log(country);   
}

countries();
console.log(country);