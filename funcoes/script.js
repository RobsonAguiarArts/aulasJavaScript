// Crie uma função para verificar se um valor é Truthy
function reprovou(notaProva){
  var notaMinima = 5;
  if(notaProva < notaMinima){
    return true;
  }else{
    return false;
  }
}
console.log(reprovou(5));
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(ladoQuadrado){
  var perimetro = ladoQuadrado + ladoQuadrado;
  return perimetro;
}
console.log(perimetroQuadrado(10));
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome,sobrenome){
return` ${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Robson','Aguiar'));

// Crie uma função que verifica se um número é par
function numeroPar(numero){
  if(numero % 2 == 0 ){
    return `O número digitado foi ${numero} e o resto da divisão dele é ${numero % 2} então ele é par`;
  }else{
    return `O número digitado foi ${numero} e o resto da divisão dele é ${numero % 2} então ele é impar`;
  }
}
console.log(numeroPar(3));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function restanteDeFerias(diasDeferiasJaTiradas){
  var totalDeFerias = 30;
  var faltamTirar = totalDeFerias - diasDeferiasJaTiradas;
  return`Eu ainda tenho ${faltamTirar} dias de ferias para aproveitar`
}

console.log(typeof restanteDeFerias(4));
console.log(restanteDeFerias(5));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', () => {
  console.log('Robson');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
