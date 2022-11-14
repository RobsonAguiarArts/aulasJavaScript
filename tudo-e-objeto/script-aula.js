// TUDO É OBJETO
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
var nome = 'Robson';
console.log(nome.length);
console.log(nome.charAt(0));
console.log(nome.replace('son','inho'));

// Uma string herda propriedades e métodos do 
// construtor String()

// NÚMEROS

var altura = 1.8;
altura.toString();// '1.8'
altura.toFixed(); // 2

// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos.

// FUNÇÔES 

function areaQuadrado(lado){
  return lado*lado;
}
areaQuadrado.toString();
// function areaQuadrado(lado){
//   return lado*lado;
// }
console.log(areaQuadrado(10));
console.log(areaQuadrado.length);

//ELEMENTOS DO DOM
var btn = document.querySelector('.btn');
btn.classList.add('azul') // adiciona a classe azul
btn.innerText; //'Clique'
btn.addEventListener('click', function(){
  console.log('clicou');
})
// Praticamenteo todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

