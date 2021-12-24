var NumeroMasCercanoA100 = (a,b) => {
    let x = 100-a;
    let y = 100-b;
    
    if(x < y){
        return a;
    }else{
        return b;
    }
};

let n1 = 85;

let n2 = 40;

console.log(NumeroMasCercanoA100(n1,n2));