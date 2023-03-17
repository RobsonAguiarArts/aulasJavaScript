
// Condicionais Else If

var possuiGraduacao = false;
var possuiDoutorado = false;

if(possuiGraduacao){
  console.log('Possui Graduação');
}else if(possuiDoutorado){
  console.log('Possui Doutorado');
}else{
  console.log('Não possui nada')
}

// Truthy  e Falsy

var nome = -0;
if(nome){
  console.log(nome);
}else{
  console.log('Nome não existe');
}
//Existem valores que retornam true e outros que retornam false 
//quando verificaddos em expressão booleana.

//falsy
if(false);
if(0); //ou -0
if(NaN);
if(null);
if(undefined);
if('');//ou "" ou ``
//todo o resto é Truthy

//Truthy
if(true);
if(1); 
if(' ');
if('Robson');
if(-5);
if({});


// Operador Lógico de Negação !
// Truthy

if(!true);//false
if(!1); //false
if(!'');//true
if(!undefined); //true
if(!!' ');//true
if(!!'');//false

// Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy

//Operadores de comparação

// Vão sempre retornar um valor booleano
10 > 5;//true
5 > 10;//false
20 < 10;//false
10 <= 10;// true
10 >= 11;//false

// O == faz comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dedo deve ser o mesmo quando usamos ===

10 == '10'; //true
10 == 10; //true
10 === '10'; //false
10 === 10; //true
10 != 15; //true
10 != '10'; // false
10 !== '10';// true

//Bollean e condicionais 2

// Operadores Lógicos &&

true && true; //true
true && false; //false 
false && true; //false
'Gato' && 'Cão'; //Cão
(5-5) && (5+5); //0 
'Gato' && false; //false
(5 >= 5) && (3<6); //true

// Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo  e não irá continuar a verificar 
// os próximos.
if((5-5)&& (5+5)){

  console.log('verdadeiro')
}else{
  console.log(false);
}
// false
var condicional = (5 - 10)&& (5 + 5);
if(condicional){

  console.log('verdadeiro', condicional)
}else{
  console.log(false);
}
// valores negativos tambem são Truthy

// Operadores Lógicos ||

// || Compara se uma expressão ou outra é verdadeira

true || true; //true 
true || false;//true
true || true;//true
'Gato' || 'Cão';//Gato
(5-5) || (5+5); //10
'Gato' || false; //Gato
(5 >= 5) || (3 < 6); // true

// Retorna o primeiro valor true que encontrar

var condicional2 = (5 - 5)||(5 + 5)||(10 - 2);//10
console.log(condicional2);

// Switch
// Com o switch você pode verificar se uma variável é igual à differentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palabra chave break; pára cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

var corFavorita = '';

switch(corFavorita){
  case 'Azul':
    console.log('Olha para o céu');
    break;
  case 'Amarelo':
    console.log('Olhe para o Sol');
    break;
  case 'Verde':
    console.log('Olhe para a floresta');
    break;
    default:
      console.log(  'Feche os olhos');
}

