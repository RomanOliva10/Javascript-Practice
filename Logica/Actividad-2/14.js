var array = ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet", "laboris"]

array.forEach((element,index) => {
    
    if(element=="laboris"){
        array[index]= array[index].toLocaleUpperCase()
    }
});

console.log(array)