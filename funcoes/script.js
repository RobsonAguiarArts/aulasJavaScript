// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQaudrado(lado){
  return lado * lado;
}
var quadrado = areaQaudrado(10);
areaQaudrado(5);
areaQaudrado(2);
console.log(quadrado);

function pi(){
  return 3.14;
}
var total = 5 * pi();
console.log(total);

// Parâmetros e Argumentos

// Ao criar uma função, você pode definir parâmetros.

// Ao executar uma função, você pode passar argumentos.
// peso e altura são os parâmetros
function imc(peso,altura){
  const imc = peso / (altura ** 2);
  return imc;
}
console.log(imc(76,1.76));
console.log(imc(76,1.86));

function corFavorita(cor){
  if(cor === 'azul'){
    return 'Eu gosto do céu';
  }else if(cor === 'verde'){
    return 'Eu gosto de mato';
  }else{
    return 'Eu não gosto de nada';
  }
}
// parênteses executa a função
console.log(corFavorita('azul'));

// Argumentos podem ser funções

// Chamadas de Callback, geralmente são as funções qe ocorrem após algum evento

addEventListener('click', () => {
  console.log('clicou');
});

// Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}