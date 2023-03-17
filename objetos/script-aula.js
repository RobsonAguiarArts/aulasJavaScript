// Conjuntos de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
  nome: 'Robson',
  idade: 35,
}
console.log(pessoa.nome);
//Métodos
//É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function(lado){ // podemos abreviar a função area(lado)
    return lado * lado;
  },
  perimetro: function(lado){ // podemos abreviar a função perimetro(lado)
    return this.lados * lado;
  },
  cincoLados(lado){
    return lado * 5;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5))
console.log(quadrado.cincoLados(5))

// Organizar o Código

// Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random(); // Número aleatório

var pi = Math.PI; 
var aleatorio = Math.random();
console.log(pi); // 3.14
console.log(aleatorio)
// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

//Aula 02 Objeto

// Criar um Objeto

// um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};
console.log(typeof carro); // object

// Dot Notation Get

// Acesse propriedades de um objeto utilizando o ponto .
var height = 120;
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e',
  metadeHeight(){
    return this.height / 2;
  }
}
console.log(menu.metadeHeight());
menu.backgroundColor= '#000';
menu.color = 'blue';
menu.esconder = function(){
  console.log('Escondi');
}
var bg = menu.backgroundColor;

// Protótipo e Herança

// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

