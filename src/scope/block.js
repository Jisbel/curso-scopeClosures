// El scope local de bloque es el entorno donde las variables locales únicamente pueden ser accedidas desde un bloque de código del programa. Un bloque de código es todo aquello que está dentro de los caracteres de llaves {}.

function fruits (){
    if (true) {
        var fruit1 = 'Apple'; // funtion
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana';// block scope 
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
    // console.log(fruit2); dan undefine
    // console.log(fruit3); dan undefine
}

fruits();