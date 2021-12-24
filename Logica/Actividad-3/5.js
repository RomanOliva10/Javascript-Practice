var InvertirArray = (v) => {
    let invertido = [...v]
    return invertido.reverse();
}; 

let array = [1,2,3,4,5];
console.log(InvertirArray(array));
console.log(array);