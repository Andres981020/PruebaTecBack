//Andres Mosquera Alvarado

//Se crea funcion para determinar si hay un posible split de un arreglo cuyas sumas sean iguales
function canBeSplit(array){
    var izq=0;
    var der=0;
    var n=1;

//Condición para saber si el arreglo está vacio y retornar 0
    if(array.length == 0){
        return 0;
    }

    while(n < array.length){
        izq=0;
        der=0;

        for(var i=0; i<n;i++){
            izq = izq+array[i];
        }
        for(var i=n;i<array.length;i++){
            der = der+array[i];
        }

        console.log("izq: "+izq);
        console.log("der: "+der);

//condición para determinar si las sumas son iguales y retornar 1
        if(izq == der){
            return 1;
        }
        n=n+1;
    }

//Si se llega a esta linea, se retorna -1 debido que el arreglo no esta vacio
//y no hay splits cuyas sumas sean iguales
    return -1;
}

//Arreglos con diferentes especificaciones
const prueba1 = [1,3,3,8,4,3,2,3,3];
const prueba2 = [1,3,3,4,3,2,3,3,6];
const prueba3 = [1,2,3,6,13];
const prueba4 = [];

// Para probar los diferentes arreglos, descomentar el console.log
// por defecto deje el arreglo del documento

// Prueba cuando la suma de los splits es igual

console.log(canBeSplit(prueba1));
//console.log(canBeSplit(prueba2));

// Prueba cuando la suma de los splits es diferente

//console.log(canBeSplit(prueba3));

// Prueba cuando el arreglo no tiene elementos numericos

//console.log(canBeSplit(prueba4));