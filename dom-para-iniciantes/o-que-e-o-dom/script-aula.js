// window.alert("Isso mesmo");
const href = window.location.href;
console.log(href);
if (
  href === "http://127.0.0.1:5500/dom-para-iniciantes/o-que-e-o-dom/index.html"
) {
  console.log("é igual");
}
const h1Selecionado = document.querySelector("h1");
h1Selecionado.innerText; //retorna o texto;
h1Selecionado.classList; //retorna as classes;
h1Selecionado.id; //retorna o id;
h1Selecionado.offsetHeight; // retorna a altura do elemento

const h1Classes = h1Selecionado.classList;
console.log(h1Classes);

function callbackh1() {
  console.log("Clicou em ", h1Selecionado.innerText);
}
h1Selecionado.addEventListener("click", callbackh1);
//ativa a função callback ao clicar no titulo.
