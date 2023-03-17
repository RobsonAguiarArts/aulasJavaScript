// Tipos de Dados
var nome = "Robson";
var idade = 35;
var time = null;
var simbolo = Symbol();
console.log(typeof simbolo);

// Concatenando String

var primeiroNome = "Robson";
var sobrenome ="Aguiar"

var nomeCompleto = primeiroNome + ' ' + sobrenome;
console.log(nomeCompleto);


// var gols = 1000;
// var frase = 'Romário fez ' + gols + ' gols';
// console.log(typeof frase);


// String + Number concatenam ao somar

var ano = '2018';
var mes = 8;
console.log(ano + mes);
var melhor = 'teste';
var frase1 = "Esse é o " + melhor + " jogo"
console.log(frase1);

// Template String

var gols = 1000;
var frase2 = `Romário fez ${gols *2} gols`;
console.log(frase2);



