//'use strict'
// ESCOPO DE FUNÇÃO

// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

var carro = "Fusca";
function mostrarcarro(){
  console.log(carro);
}
mostrarcarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

// Escopo evita o conflito entre nomes.

// VARIÁVEL GLOBAL (ERRO)

// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessada em qualquer escopo 'global'.
function mostrarFruta(){
  fruta = 'Maçã';
  console.log(fruta);
}
mostrarFruta();
console.log(fruta);
//  Isso é um erro.

/*
 'use strict'  deve ser declarada no escopo do documento ou acima da função.
impede Isso.
*/

// ESCOPO DE FUNÇÃO (PAI)

// variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

var raca = 'Bulldog';
function mostrarRaca(){
  var frase =  `Meu cachoirro é da raça ${raca}`;
  console.log(frase);
}
mostrarRaca(); // Meu cachorro é um Bulldog
console.log(raca); // Bulldog


// ESCOPO DE BLOCO

// Variáveis riadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

if (true){
  var animal = 'Macaco';
  console.log(animal); 
}
console.log(animal); // Macaco

// Com a variável let

if (true){
  let mes = 'Dezembro';
  console.log(mes); // mostra o mes
}
// console.log(mes); Erro mes is not defined

// Com a variável const

if(true){
  const ano = 2022;
  console.log(ano); // mostra ano 
}

//console.log(ano); Erro ano is not defined

// VAR VAZA O BLOCO

// Mesmo com a condição FontFaceSetLoadEvent, a variável ainda será declarada utilizando o hoisting e o valor  ficará como undefined.

if(false){
   var filme = 'Titanic';
  console.log(filme); // mostra o valor
}

console.log(filme); // com a condição false, retorna undefined, pois ele joga a variavel para o escopo sem declarar valos como se fosse, var filme;

// CONST E LET NO LUGAR DE VAR

// A partir de agora vamos utilizar apenas const e let para declararmos variáveis.

// {} CRIA UM BLOCO

// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
  var carro2 = 'Fusca 2';
  const ano = 2018;
}
console.log(carro2); // Fusca 2
//console.log(ano);  // Erro ano is not defined

// FOR LOOP
let i = 50;
for(let i = 0; i < 10; i++){
  console.log(`Número ${i}`);
}

console.log(i * 10);

// CONST

// Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const semana = 'sexta';
console.log(semana);
// semana = 'Quinta'; // não é possivel redeclarar a variável constante.

// const semana = 'Quinta'; // Não é possivel declarar duas variáveis com o mesmo nome;

const data = {
  dia: 28,
  mes:  'Agosto',
  ano: 2019,
}
data.dia = 25;
data.ano = 2021;
// não é possovel redeclarar objeto criado como constante data = 10;
console.log(data.ano,data.mes,data.dia,data.mes.length);
// é possivel redeclarar os valores de um método mas nao do objeto criado com uma Constante.

//LET 

// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let ano;
ano = 2019;
ano++;
console.log(ano); //2020

// let ano = 2021; // Erro, redeclarou a variável

// Geralmente vamos utilizar o const.
