let reporte="lorem ipsum scammer simply laboris sit amet"

let cont=0;

function contarVocal(v){
    if(v=="E"||v=="I"||v=="O"||v=="U")
        cont++
}


reporte=reporte.replace('a',"x")

reporte = reporte.replace(/[eiou]/g, (match) => match.toUpperCase());


reporte=reporte.split("");


reporte[reporte.length-1]='@';


reporte.forEach(element=>{
    contarVocal(element)
})
reporte=reporte.toString()
reporte=reporte.replace(/,/ig,"");

console.log(reporte)
console.log(cont)