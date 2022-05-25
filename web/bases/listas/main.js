//javascript: uma linguagem de programação

//POO: programação orientada á objetos
//Atributos e Métodos (funções)

//Exemplos de atributos: cor, altura, largura, etc.
//Exemplos de Métodos/Funções: freiar, acelerar, virarAdireita

let nomeVarialvel = 1

//A convenção da declaração de variavel deve ser seguida:
// Variavel NÃO DEVE iniciar com NÚMEROS
// Variavel NÃO PODE iniciar com caracteres especiais
// Variavel NÃO PODE iniciar com letra caixa ALTA: 
// exemplo errado: Banana
// exemplo correto: banana
// variaveis devem possuir um valor semântico (fazer sentido)
// exemplos ruim: banana, a, b, c, x, y, n1, n2, n3
// exemplos bom: numeroDeParcelas
// exemplos nao pode ter acento
// funções deve ser seguir asmesmas convenções e devem ter valor

/* exemplos */
let nomeUsuario = 1;

// 1* Método de criar uma função, atribui-lá à uma variável
let somaValores = function () {
  console.log('somando valores')
}

//chmar/invocar/conjugar/acionar
somaValores();

// 2° metodo de declaração de variável named function
function subtraiValores() {
  console.log('subtrai')
}
subtraiValores();

// 3° metodo
const carro = {
  cor: 'vermelha', // atributo
  andar: function(){ // metodo
    console.log('andando')
  }
}

carro.andar();
