const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection[2]);
const primeiraLi = document.querySelector("li");
console.log(primeiraLi);
const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linkInterno = document.querySelector("[href^='#']");
console.log(linkInterno.href);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[5]);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");
primeiraUl.classList.add("grid-section");
// console.log(gridSectionHTML); // retorna o resultado atualizado
// console.log(gridSectionNode); // retorna o resultado statico

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});
const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid);
