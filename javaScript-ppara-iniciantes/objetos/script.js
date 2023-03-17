// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
  nome:'Robson',
  sobrenome: 'Aguiar',
  idade: 35,
  sexo: 'masculino',
  // Crie um método no objeto anterior, que mostre o seu nome completo
  nomeCompleto(){
return `${this.nome} ${this.sobrenome}`  ;
  }
}
console.log(dados.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
console.log(carro.preco);
// Crie um objeto de um cachorro que represente um labrador,
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  late(pessoa){
    if(pessoa === 'homem'){
      return 'latir';
    }else{
      return 'Nada';
    }
  }
}
console.log( `${cachorro.raca} ${cachorro.idade} anos ${cachorro.cor} ${cachorro.late('homem')}`);
// preto com 10 anos, que late ao ver um homem

