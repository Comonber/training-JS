// Breve introduccion a JSON 

var objetoJS = {
    nombre:"Fernando",
    edad:30
};

console.log("Objeto Literal ", objetoJS );

// convertimos nuestro objeto a JSON 

var jsonString = JSON.stringify(objetoJS);
console.log(jsonString);

// convertir un JSON a un objeto normal 

var objetoNormal= JSON.parse(jsonString);
console.log("Objeto normal de JS: " , objetoNormal);