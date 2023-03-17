// Retorne a url da pagina atual utilizanbdo o objeto window
const hrefSelecionado = window.location.href;
console.log(hrefSelecionado);

//Seleciona o primeiro elemento da página que possua a classe ativo

const elementAtivo = document.querySelector(".ativo");

console.log(elementAtivo.textContent);

// Retorne a linguagem do navegador

const linguagemNav = window.navigator.language;
console.log(linguagemNav);

//retorne a largura da janela
const widthWindow = window.innerWidth;
console.log(widthWindow);
