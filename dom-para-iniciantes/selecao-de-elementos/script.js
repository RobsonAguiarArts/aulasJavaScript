// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll("img");
console.log(allImages);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgImages = document.querySelectorAll('[src^="img/imagem"]');
console.log(imgImages);
// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("[href^='#']");
console.log(linksInternos);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector(".animais-descricao h2");
console.log(primeiroh2);
// Selecione o último p do site
const allP = document.querySelectorAll("p");
console.log(allP[--allP.length]);
