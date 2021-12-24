var NuevoString = (v) => {
    if (v.length >= 6){
        return v.slice(0,3).concat(v.slice(-3))
    } else{
        return "Error"
    }
};

let string = "Qweasdfgrty";

console.log(NuevoString(string));