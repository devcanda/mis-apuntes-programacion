let var1 = 3;
let var2 = 4;

//Operadores de comparacion
console.log(var1 == 3); // true
console.log(var2 != 4); // false
console.log(var1 === "3"); // false
console.log(var2 !== 4); // false
console.log(var1 > 2); // true
console.log(var2 < 5); // true
console.log(var1 >= 3); // true
console.log(var2 <= 3); // false
//Operadores arimeticos
console.log(var1 + var2); // 7
console.log(var2 - var1); // 1
console.log(var1 * var2); // 12
console.log(var2 / var1); // 1.3333...
console.log(17 % 5); // 2
console.log(var1 ** 2); // 9
//Operadores logicos
console.log(var1 < 5 && var2 > 2); // true
console.log(var1 > 5 || var2 > 2); // true
console.log(!(var1 === 3)); // false
//Operadores de asignacion
let var3 = 10;
var3 += 5; // var3 = var3 + 5
console.log(var3); // 15
var3 -= 3; // var3 = var3 - 3
console.log(var3); // 12
var3 *= 2; // var3 = var3 * 2
console.log(var3); // 24
var3 /= 4; // var3 = var3 / 4
console.log(var3); // 6
var3 %= 4; // var3 = var3 % 4
console.log(var3); // 2
var3 **= 3; // var3 = var3 ** 3
console.log(var3); // 8
//Operadores de incremento y decremento
let var4 = 5;
console.log(++var4); // 6 (pre-incremento)
console.log(var4++); // 6 (post-incremento)
console.log(var4); // 7
console.log(--var4); // 6 (pre-decremento)
console.log(var4--); // 6 (post-decremento)
console.log(var4); // 5
//Operador condicional (ternario)
let resultado = var1 > var2 ? "var1 es mayor" : "var2 es mayor o igual";
console.log(resultado); // 'var2 es mayor o igual'
//Operador de cadena
let saludo = "Hola, " + "mundo!";
console.log(saludo); // 'Hola, mundo!'
let nombre = "Juan";
let mensaje = `Hola, ${nombre}!`;
console.log(mensaje); // 'Hola, Juan!'
//Operador de tipo
console.log(typeof var1); // 'number'
console.log(typeof saludo); // 'string'
//Operador de coma
let a, b, c;
((a = 1), (b = 2), (c = 3));
console.log(a, b, c); // 1 2 3
//Operador de agrupacion
let resultado2 = (var1 + var2) * 2;
console.log(resultado2); // 14
//Operador bit a bit
let bit1 = 5; // 0101 en binario
let bit2 = 3; // 0011 en binario
console.log(bit1 & bit2); // 1  (0001 en binario)
console.log(bit1 | bit2); // 7  (0111 en binario)
console.log(bit1 ^ bit2); // 6  (0110 en binario)
console.log(~bit1); // -6 (complemento a uno)
console.log(bit1 << 1); // 10 (desplazamiento a la izquierda)
console.log(bit1 >> 1); // 2  (desplazamiento a la derecha)
console.log(bit1 >>> 1); // 2 (desplazamiento a la derecha sin signo)
