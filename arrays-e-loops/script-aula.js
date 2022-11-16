// ARRAY
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
// Exemplo similar
// var videoGames = ['Switch','PS4','XBOX'];

// videoGames[0]; // Switch
// videoGames[2]; //XBOX
// Acesse o elemento do array utilizando [n]

// Métodos e Propriedadees de Array

// videoGames.push('3DS'); //Adiciona um item ao array.(último item)
// videoGames.pop(); //Remove o ultimo item
// videoGames.length;// 3 itens
// Fim do exemplo similar

// For Loop

// Fazem algo repetidamente até que uima condição seja atingida.
for (var numero = 0; numero < 10; numero++){
  console.log(numero);
}
//retorna de 0 a 9 no console
// O for loop possui 3 Partes,
// inicio, condição e incremento

//WHILE LOOP

//Retorna de 0 a 9 no console

var i = 0;
while (i < 10){
  console.log(i);
  i++;
}
// O for loop é o mais comum

//Arrays e Loops 2
var videoGames = ['Switch', 'PS4','XBOX','3DS'];
  for(var item = 0; item < videoGames.length; item++){
    console.log(videoGames[item]);
    if(videoGames[item] === 'PS4'){
    break;
  }
}
// O for loop é mais comum
// Break
// O loop irá parar caso encontrado a palavra break

// FOREACH
// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
 var carros = ['Fusca', 'Gol', 'Caravam', 'passat'];
 for (var item = 0; item < carros.length; item++){
 console.log(carros[item]);
  if(carros[item] === 'Gol'){
    break;
  }
}
carros.forEach(function(item, index,array){
  console.log(item,index, array)
});
// podemos passar os seguintes parâmetros item (nome do item), index (posição do item) e array (Todo o array)


// Não se confunda com a sintaxe

var numero = 0;
var maximo = 50;

for (;numero < maximo;){
  console.log(numero);
  numero++
}
// Não aconselho escrever da forma acima, mas funciona normalmente.