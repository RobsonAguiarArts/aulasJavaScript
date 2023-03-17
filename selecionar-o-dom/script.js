// Retorne no console todas as imagens do site
const allImg = document.querySelectorAll("img");
console.log("todas as imagens = ", allImg);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log("imagens que comecam com imagem =", imgImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log("links internos = ", linksInternos);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);
// Selecione o último p do site
const ultimoP = document.querySelectorAll("p");
console.log(ultimoP[--ultimoP.length]);
