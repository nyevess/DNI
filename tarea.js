//He hecho varias versiones del resultado a la tarea porque ninguna me convencia.


//Le pedimos al usuario el número de DNI y lo almacenamos en la variable numDni (Esta parte actua para todas las funciones definicas)
let numDni =  prompt('Escribe tu número de DNI')
//Creamos una constante con el array de las letras a comparar con la operacion del resto de division
const LETRAS_DNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N' , 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

//En esta funcion necesitamos como parámetros el numDni que sera el proporcionado por el usuario y las LETRAS_DNI
 function permitir(numDni, LETRAS_DNI) {
 //Y comprobamos con un switch que el dato introducido es el que necesitamos, si nos pasa cualquiera de estos datos que no queremos lanzaremos un error
    switch (true){
    case numDni < 0:
    case numDni.length != 8:
    case numDni == '':
    case typeof numDni === String://No entiendo porque en este punto permite pasar el dato, ya que el prompt almacena el valor como un string y justamente aqui le decimos que si es un string muestre el mensaje de error
        alert('ERROR!!')
        break
        //Si el dato no es ningun tipo de los anteriores entonces es el que necesitamos y por tanto realizamos la operacion y le mostramos el numero de dni y la letra correspondiente
        default:
            const RESTO = numDni % 23
            alert(`DNI: ${numDni}-${LETRAS_DNI[RESTO]}`)
        break
        
    }
}
permitir(numDni, LETRAS_DNI) 



//OPCION 2 La idea es analizar en la funcion comprobar que el dato tenga las caractetisticas que queremos y entonces pasarlo a Number, y luego con la funcion obtenerLetra analizar si el dato es un number y buscar la letra, pero no persiste el cambio realizado en el tipo de dato con la función comprobar y no se porqué, por lo tanto la función obtener letra no da el resultado

//Primero comprobamos que el dato introducido tiene un longitud de 8, es superior a 0 y que no esta vacio
 function comprobar(numDni){
    if ((numDni.length === 8) && (numDni > 0) && (numDni != '')){
        //Si todo lo anterior se cumple nos pasa el dato a Number
        numDni = Number(numDni)
        //comprobamos por consola que el dato es de tipo number
        console.log(typeof(numDni))
    }else{
        alert("Los datos introducidos no son correctos, prueba de nuevo")
        console.log(typeof(numDni))
    }
}
comprobar(numDni)  

//Ahora con la funcion obtenerLetra sacamos la letra correspondiente pasandole por parametro el numero de DNI y la lista de las letras
function obtenerLetra(numDni, LETRAS_DNI){
    const RESTO = numDni % 23
    //Analizamos si el tipo de dato es un numero, aquí esta el fallo que sigue tratando el dato como un string
    if(typeof numDni === 'number'){
    //Si es un numero muestra el mensaje
    alert(`Tu número de DNI es: ${numDni} y la letra es: ${LETRAS_DNI[RESTO]}`)
}else{
    //Y si no lo es muestra este mensaje
    alert("El tipo de dato no es un number")
    //Comprobación por consola del tipo de dato
    console.log(typeof(numDni))
}
}

obtenerLetra(numDni,LETRAS_DNI) 

//OPCION 3
// A esta funcion le pasamos como parametro el numero del dDNI y la lista de las letras
 function comprobar1(numDni, LETRAS_DNI) {
     //declaramos la constante resto con la operacion que tiene que realizar
    const RESTO = numDni % 23
    //Analizamos con IF la longitud del dato introducido, que es mayor a 0 y que no esta vacio
    if ((numDni.length === 8) && (numDni > 0) && (numDni != '')){
        //Si esto se cumple mostramos el mensaje correcto
        alert(`Tu número de DNI es: ${numDni} y la letra es: ${LETRAS_DNI[RESTO]}`)
    }else{
        alert("Los datos introducidos no son correctos, prueba de nuevo")
    }
}
comprobar1(numDni, LETRAS_DNI)   