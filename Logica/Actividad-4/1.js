var relaciones = (v) => {
    switch (v) {
        case "Ricardo":
            console.log(v+" es su tio")
            break;
        case "Roberto":
            console.log(v+" es su hermano")
            break;
        case "Dinamita":
            console.log(v+" es su tio")
            break;
        case "Argentina":
            console.log(v+" es su pais")
            break;
        default:
            console.log("No hay relacion")
            break;
    }
};
                    
let str = prompt("Ingrese una cadena: ")
relaciones(str);