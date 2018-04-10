// Cookies
console.log("Ejercicio de cookies en JS");

// creamos la cookie
document.cookie = "nombre = Berta;";
document.cookie = "apellido = Herrera";

// leemos todas las  cookie
//var cookies = document.cookie; 
//console.log(cookies); 



function crearCookie(nombre, valor){

    valor = escape(valor);

    var hoy = new Date();
    hoy.setMonth( hoy.getMonth() + 1 ); // sumamos un mes a la fecha de hoy
    document.cookie = nombre + "=" + valor + ";expires=" + hoy.toUTCString() + ";";

}

crearCookie("nombreGato", "Brigitte");

function borrarCookie(nombreCookie){

    var hoy = new Date();
    hoy.setMonth( hoy.getMonth() - 1 ); // sumamos un mes a la fecha de hoy
    document.cookie = nombreCookie + "=x;expires=" + hoy.toUTCString() + ";";

}

borrarCookie("nombreGato");

function getCookie(nombreCookie){

    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");
    console.log(cookieArr);  
    
    for(var i =0; i< cookieArr.length; i++){
        var parArr = cookieArr[i].split("=");
        cookieArr[i] = parArr;
        
        if(parArr[0] === nombre){
            return unscaped( parArr[1] );
        }

    }
    
    return undefined;
}

getCookie("correo");