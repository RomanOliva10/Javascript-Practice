var Extension = v => {
    let extension = v.split(".");
    let nombre = extension.length -1;
    if (nombre === 0){
        return "No tiene extensión";
    } 
    return "." + extension[index];
}

let ext=prompt("Inrgese una extensión: ")
console.log(Extension(ext));