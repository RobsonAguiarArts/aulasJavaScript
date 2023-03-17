// DOCUMENT OBJECT MODEL (DOM)
// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades
window.innerHeight; // Retorna a altura do browser
// WINDOW E DOCUMENT

// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.
// window.alert('Isso é um alerta');
// alert('Isso é um alerta'); // Funciona

//Uma das formas de selecionar Elemento no documeto
const href = window.location.href;
console.log(href);

const  h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList[1];
// NODE
// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

const titulo = document.querySelector('h1');
titulo.innerText;// Retorna o texto.
titulo.classList; //retorna as classes
titulo.id; //retorna o ID
titulo.offsetHeight; //retorna a altura do elemento;

function callbackh1(){
  console.log('Clicou em' , titulo.innerText);
}
titulo.addEventListener('click', callbackh1);

