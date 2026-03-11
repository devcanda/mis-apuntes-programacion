/*
Identificar valores de una lista, si son primos o impares la suma de sus
valores en binario.
Ejemplo: [2,4,12] = [0010, 0100,1100] = [1,1,2]
         Valor analiar   Valor en Binario    Resultado suma binaria
*/
let lista=[23,43,22,11];
let binarios = lista.map(tm => tm.toString(2));
console.log(binarios);
let km="";
let cont=0;
function primo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // console.log("Entrando ******* " + i);
        if (n % i === 0) return false;
    }
    return true;
}
function identificar(x) {
    let rs = "";
    if (x % 2 == 0) {
        rs = 1; // 1= Para valor Par
    } else {
        rs = 0; // 0= Para identificar Valor Impar
    }
    dt=primo(x);
    if (dt==true) {
        rs = 2;
    }
    return rs;
}

for (let h=0;h<binarios.length;h++){
    km=binarios[h];
    cont=0;
    console.log("************");
    for (let g=0; g<km.length;g++){
        if (km[g]=="1"){
            cont+=1;
        }       
    }    
     console.log(identificar(cont));
}