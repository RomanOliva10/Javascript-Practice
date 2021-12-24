const sumarDigitos = (v) =>{
    let digitos = v.toString();
    digitos.split("");
    let suma=0;
    for (const i of digitos) {
        suma+=parseInt(i);
    }
    console.log(suma);
}

let n1 = 55
sumarDigitos(n1);

