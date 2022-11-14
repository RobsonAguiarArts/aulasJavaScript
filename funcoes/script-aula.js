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
function imc2(peso,altura){
  const imc = peso / (altura **2);
  console.log(imc);
  
}
imc2(20,1.8);

console.log(imc2(50,1.8)); // retorna o imc e undefined

// valores retornados

// Uma função pode retornar qualquer tipo de dado e até outras funções.


function terceiraidade(idade){
  if(typeof idade !== 'number'){
    return 'Por favor entre com um número';
  }
  else if(idade >= 60){
    return true
  }else{
    return false
  }
}
console.log(terceiraidade('dsda'));
// Cuidado, retornar diferentes tipos de de dados na mesma função não é uma boa pratica.


//Escopo 
// Variaveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.  

function faltaVisitar(paisesVisitados){
  var paisesExistentes = 193;
  return `Faltam visitar ${paisesExistentes - paisesVisitados} países`
}
console.log(faltaVisitar(90));

//Escopo Léxico

// Funções conseguem acessar variáveis que foram crciadas no contexto pai.

var profissao = 'Desenvolvedor';
function dados(){
  var nome = 'Robson';
  var idade = 35;
  function outrosDados(){
    var endereco = 'São Paulo';
    var idade = 36;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados());
// outrosDados(); // retorna Erro

// Hoisting
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória