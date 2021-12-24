const adivinaAleatorio = () =>{
    var numeroAleatorio = Math.floor((Math.random()*(10-1))+1);
    var respuesta = prompt("Introduzca un numero del 1 al 10");
    while(Number(respuesta)!==numeroAleatorio){
        if(respuesta<numeroAleatorio){
            respuesta = prompt("El número es mayor");
        }else{
            respuesta = prompt("El número es menor");
        }
    }
    if(respuesta==numeroAleatorio){
        console.log("Correcto");
    }
}

adivinaAleatorio();