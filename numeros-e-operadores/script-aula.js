// Operadores Aritiméticos
var total = 10+5+10;
var divisao = 200 / 5;
var modulo = 3872983892 % 3;
console.log(modulo);

// Operadores Aritiméticos (Strings)

var testeNaN =  '100' / 2;
console.log(isNaN(testeNaN));

// A ordem Importa
// Começa por multiplicação e divisão , depois soma e subtração.
// parenteses prioriza a expressão

var total1 = 20 + 5 * 2;
var total2 = (20 + 5) * 2;
var total3 = 20/2*5;
var total4 = 10 + 10 * 2 + 20 / 2;
console.log(total1,total2,total3,total4);


var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10; //110
console.log(soma1);

// Operadores Aritiméticos Unários

var incremento = 1;
console.log(incremento++);//retorna o valor e depois incrementa
console.log(++incremento);//incrementa e depois retorna valor
var decremento = 2;
console.log(decremento--); //retorna o valor e depois decrementa
console.log(--incremento);//decrementa e depois retorna valor


var idade = '35';
var somaidade = 5;
console.log(+idade + somaidade);

