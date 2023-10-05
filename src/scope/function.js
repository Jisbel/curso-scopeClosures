//Local Scope: Al declarar variables dentro de un bloque o una funcion estas solo podran ser utilizadas dentro de la misma, si se trata de invocar desde afuera la consola marcara un error y aplica solo al usar let o const.

// El scope local de función (function scope) es el entorno donde las variables locales solo se pueden acceder desde una función del programa.

// En este scope no importa que las variables sean declaradas con var, let o const. Sin embargo, ten presente que se puede redeclarar una variable con var, pero no con let y const.

function greeting (){
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }

}

greeting();
console.log(userName);