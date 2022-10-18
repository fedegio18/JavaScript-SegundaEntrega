const user = "fede";
const pass = 1234;

const userAdm = "admin";
const passAdm = "admin1234";
let respuestaHuertaAgregar = [];
let respuestaJardineriaAgregar = [];
let seencuentra = "";

let loguearse = confirm("¿Quiere iniciar sesion?")

if(loguearse){
    loguin();
}

function loguin () {
    let user_log = prompt("ingrese su usuario");
    let pass_log = prompt("ingrese su contraseña");

    if (validar(user_log, pass_log)){
        mostrarProductos();
    } 

     else if(validar(user_log, pass_log)){
        agregarProducto();
     } else
    { recupero();

    }
           
}


function validar(user_log, pass_log){
    if (user_log == user && pass_log == pass){
        return true;
    } 
    else if(user_log == userAdm && pass_log == passAdm){
        alert("Usted ingreso como Administrador, ahora puede agregar productos al stock");
        agregarProducto();
        return true;
        
    }
    else if(user_log != user){alert("el usuario es incorrecto")
        return false ;
    }
    else if(pass_log != pass){ 
        alert("La contraseña es incorrecta")        
        return false ;
    }

}

function recupero(){

    let recu = confirm("Desea cambiar su contraseña y/o usuario");

    if (recu){
        let mail = prompt("Ingrese su correo electronico para validar sus datos,");
    }
    else {
        alert("Vuelva a intentarlo")
        loguin();
    }
}




function seleccionarProductosHuerta(){
    let productoAgregar = prompt(`Ingrese el nombre del producto a comprar `);
    let seencuentra = stockHuerta.filter(verduras => verduras.nombre === productoAgregar); 
    console.log(seencuentra);

    let nombre = productoAgregar;

    if(seencuentra){
        respuestaHuertaAgregar.push({nombre})
        console.log(respuestaHuertaAgregar);
        let quiereAgregarOtro = confirm("Quiere agregar otro producto?");

        while(quiereAgregarOtro){
            seleccionarProductosHuerta();
        
        }

        if(!quiereAgregarOtro){
            for(i = 0 ; respuestaHuertaAgregar.length -1 ; i++){
                alert("Su listado de productos es: "+respuestaHuertaAgregar[i].nombre )
                console.log(respuestaHuertaAgregar);
            }
            
        }

    }




}


function seleccionarProductosJardineria(){
    let productoAgregar = prompt(`Ingrese el nombre del producto a comprar `);
    let seencuentra = stockHuerta.filter(verduras => verduras.nombre === productoAgregar); 
    console.log(seencuentra);

    let nombre = productoAgregar;

    if(seencuentra){
        respuestaJardineriaAgregar.push({nombre})
        console.log(respuestaJardineriaAgregar);
        let quiereAgregarOtro = confirm("Quiere agregar otro producto?");

        while(quiereAgregarOtro){
            seleccionarProductosJardineria();
        
        }

        if(!quiereAgregarOtro){
            for(i = 0 ; respuestaJardineriaAgregar.length -1 ; i++){
                alert("Su listado de productos es: "+respuestaJardineriaAgregar[i].nombre )
                console.log(respuestaJardineriaAgregar);
            }
            
        }

    }




}

function mostrarProductos() {
    let queMostrar = prompt(`Ingrese 1 para Huerta \n Ingrese 2 para jardineria`);
    let jardineriaHuerta = parseInt(queMostrar);


    if (jardineriaHuerta === 1){
        for (i = 0; i < stockHuerta.length; i++) {
            respuestaJardineria = confirm(`Productos actuales :\n ${stockHuerta[i].nombre} \n`);
            /* console.log(stockHuerta[i].nombre.indexOf); */}
            seleccionarProductosHuerta();
        }  else if (jardineriaHuerta === 2){
            for (i = 0; i < stockJardineria.length; i++) {
                respuestaJardineria = confirm(`Productos actuales :\n ${stockHuerta[i].nombre} \n`);
                /* console.log(stockHuerta[i].nombre.indexOf); */}
                seleccionarProductosJardineria();

        }
    
    };  

































    //let elegirProductoJardineria = "";
/* 
    if (jardineriaHuerta === 1) {
        for (i = 0; i < stockJardineria.length; i++) {
            respuestaJardineria = confirm(`Productos actuales :\n ${stockJardineria[i].nombre} \n`);
            console.log(stockJardineria[i].nombre.indexOf);
        }

        if (respuestaJardineria) {
            let jardineriaSeleccion = prompt("Escriba el nombre del producto que desea");
            let elegirProductoJardineria = function(){
            return stockJardineria.filter((stockJardineria) => {
                return stockJardineria.nombre == jardineriaSeleccion
            } )  
           }
           respuestaJardineriaAgregar.push(elegirProductoJardineria()[{}]);
           console.log(respuestaJardineriaAgregar);
           alert(`producto agregado ${respuestaHuertaAgregar[1]}`)

        }
    }
    else if (jardineriaHuerta === 2) {

        for (i = 0; i < stockHuerta.length; i++) {
            respuestaJardineria = confirm(`Productos actuales :\n ${stockHuerta[i].nombre} \n`);
            console.log(stockHuerta[i].nombre.indexOf);
        }


        let huertaSeleccion = prompt("Escriba el nombre del producto que desea");
        let elegirProductoJardineria = function(){
        return stockHuerta.filter((stockHuerta) => {
            return stockHuerta.nombre == huertaSeleccion
        } )  
       }
       respuestaHuertaAgregar.push(elegirProductoJardineria());
       console.log(respuestaHuertaAgregar);
    } */

                   

 
