/* Arrays +*/


let producto = "";
function agregarProducto() {


    let queIngresar = prompt(`1)Agregar productos huerta \n2)Agregar productos Jardineria`);
    let ingresado = parseInt(queIngresar);
    if(ingresado === 1){
        let productoHuertas = prompt("Escriba el nombre del producto a ingresar en stock");
        stockHuerta.push(productoHuertas);
        mostar();
    }
    if(ingresado === 2){
        let productoJardineria = prompt("Escriba el nombre del producto a ingresar en stock");
        stockJardineria.push(productoJardineria[{}]);
        mostar();
    }    
    
}

function quitarProducto(){
    let queQuitar = stock.values();

    for (const eliminar of queQuitar) {
       let eliminado = confirm('Desea eliminar '+ eliminar);

       if(eliminado){

        let position = stock.indexOf(eliminar);

        if(position > -1){
            stock.splice(position, 1);
        }else{
            alert("No existe el producto");
        }
        
        }

    }

}

function mostar(){
    let productosCargadosHuerta = stockHuerta.values();
    let productosCargadosJardineria = stockJardineria.values();

    for (const iterator of productosCargadosHuerta) {
        let info = confirm("Finalizar carga de productos " + iterator[1].nombre);
    } 
    for (const iterator of productosCargadosJardineria) {
        let info = confirm("Finalizar carga de productos " + iterator[1].nombre);
    } 
    if(info){
        let gracias = alert("Tus productos fueron cargados correctamente");
    }
}


while(producto){
    agregarProducto();
    producto = confirm("¿Quiere agregar un producto?");

}

let queHacer = "";

while(queHacer){
    quitarProducto();
    queHacer = confirm("¿Quieres eliminar algun producto?") ;
}

/* let lista = confirm('Sus productos seleccionados son: \n'+ stockJardineria.nombre + stockHuerta.nombre ); */

if(lista){
    alert("Productos cargados exitosamente");
}

else{
    agregarProducto();
}
