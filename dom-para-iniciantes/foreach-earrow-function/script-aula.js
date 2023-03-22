// FOREACH
// Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

// PARÂMETROS DO FOREACH
// O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;
// const imgs = document.querySelectorAll("img");
// imgs.forEach(function (item, index, array) {
//   // console.log(item, index, array);
// });

// FOREACH E ARRAY
// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item, index, array) {
  console.log(item, index, array);
});
// ARROW FUNCTION
// Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

const imgs = document.querySelectorAll("img");
// imgs.forEach((item, index, array) => console.log(item, index, array));

// PARÂMETROS E PARÊNTESES
let i = 0;
imgs.forEach(function () {
  console.log(i++);
});

imgs.forEach(() => console.log(i++));
