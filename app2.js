// call() bind() y apply()


var carro ={

    color: "Blanco",
    marca: "Mazda",
    imprimir: function(){
         var salida = this.marca + "-" + this.color;
         return salida;
    }
};

var carro2 ={
    color:"Rojo",
    marca:"Toyota"
};

console.log( coche.imprimir() ); // Mazda-Blanco

var logCarro = function (arg1, arg2){

    console.log( "Carro: ", this.imprimir() ); // this apunta al objet global, en este caso Window , busca la funcion imprimir y tira un error xq no la encuentra 
    console.log("Argumentos: " , arg1, arg2);
    console.log("===========================");

};

//logCarro();


/* con bind altero el valor del this cuando sea llamada la funcion.
  al principio this apunta al objeto global, pero con bind le estamos diciendo a this que apunte a carro 
*/
var logModeloCarro = logCarro.bind(carro);   

logModeloCarro("abc", "xyz"); 


logModeloCarro.call(carro, "123", "456"); // el primer parametro es a lo que queremos que apunte el this
logModeloCarro.apply(carro, ["123", "456"]); 


// Funciones prestadas 
console.log( carro.imprimir.call(carro2) );