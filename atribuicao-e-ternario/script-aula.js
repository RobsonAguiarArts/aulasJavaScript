// COMENTÁRIOS

// Comentário de uma linha

/*
Comentario 
com diversas 
linhas 
*/
// var nome = 'Robson';

// Comentar uma linha de codigo desativa a mesma. Não deixe linhas de códigos comentados no arquivo final.

// OPERADORES DE ATRIBUIÇÃO

// Podem funcionar como formas abreviadas

var x = 5;
var y = 10;

x += y; // x =  x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y;// x = x ** y (9765625)

// OPERADOR TERNÁRIO

// Abreviação de condicionais com if e else

var idade = 20;
naopossuiDiabetes = true;

var podeBeber;
podeBeber = (idade >= 18 && naopossuiDiabetes) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);

// condição ? true : false

// Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição

// IF ABREVIADO

// Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

//ou

if(possuiFaculdade)
  console.log('Popssui faculdade');
else
  console.log('Não possui faculdade');
  
// Eu pareticulamente prefiro a segunda opção aqui



