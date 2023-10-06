// Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

//El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con var.



// var nameOfDog; // el valor es undefined 

// console.log(nameOfDog);
// var nameOfDog = 'Elmo';
// console.log(nameOfDog);

var elmo; // undefined
function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';
