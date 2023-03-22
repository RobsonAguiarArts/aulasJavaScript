// Seletor ID

//Seleciona o elemento pelo ID
const animais = document.getElementById("animais");
// console.log(animais.innerText);

//retorna null caso não exista
const naoExiste = document.getElementById("teste");
// console.log(naoExiste);

// Seletor Calsse e Tag

// getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection

const gridSection = document.getElementsByClassName("grid-section");
// console.log(gridSection[1]);

const tagLi = document.getElementsByTagName("li");
// console.log(tagLi[0]);

// Seletor Geral Único
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const primeiraLI = document.querySelector("li");
console.log(primeiraLI);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linkInternos = document.querySelector("[href^='#']");
console.log(linkInternos);

//Seletor Geral de lista

// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);
// Diferente do getElementsByClassName, a lista aqui é estática

// HTMLCOLLECTION VS NODELIST
// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");
// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);

// ARRAY-LIKE
// HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});
arrayGrid = Array.from(gridSectionHTML);
arrayGrid.forEach(function (item) {
  console.log(item);
});

// É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)
