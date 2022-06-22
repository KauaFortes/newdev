/*


dev web

front-end
html, css, javaScript

html é a linguagem de marcação
css é a linguagem de estilo 
JS é a linguagem de programação

o html e o css juntos dão a aparencia (maquiam) a pagina web
o js - interações da pagina, da vida aos botões, aos inputs, toda a interação visual que o usuario tem com a pagina

existem servidores provendo recursos, podendo ser tanto no front quanto no back-end: baixar imagens, html, arquivos em geral

a comunicação é feita atraves do protocolo HTTP (HTTPS)
HTTPS possui um nivel de segurança que é utilizando certificados SSL que criptgrafa as informaçoes durante a transferencia

js - linguagem de programação

POO: programação orientada a objetos

classes, objetos...

classes: 
  propriedades/atributos
  metodos

exemplo
  fruta:
    nome
    tamanho
    valor
    sabor

  carro:
    modelo
    marca
    cor
    ano


    ((o carro e a fruta e as classes, e o que tem dentro deles é oq aquela classe tem))

objeto: objeto é uma instancia de uma classe
  
exemplo:
  const fruta1 = {
    nome: 'banana'
    tamanho: 2cm 
  }

exemplo:
  const carro1 = {
    nome: 'supra'
    marca: 'toyota'
    cor: laranja
    ano: 1990
  }

metodos / função
funçoes pedem, receber parametros, eles são opcionais
funçoes podem retornar algum valor, exemplo: um valor booleano(se a madura esta madura(sim ou não))
function estaMaduro(tempoDeVida) {
  const ehtrue = false
  if (tempoDeVida >= 2) {
    ehtrue = true
    return true
    (((return = vai evolver o resultado e parar a function)))
  }
  return false
}

estaMaduro()

function carro (modelo, ano) {
  return {
    modelo: (recebe de) modelo,
    ano: (recebe de) ano
    (se for o msm nome apenas faça assim
      return {
       modelo,
       ano
  }
}

const carro1 = carro('saveiro', 1234)   ((carro1 e carro2 é uma estancia de uma classe))
const carro2 = carro('gol', 1234)

const valorDesconto = 10;
function minhafuncao () {
  console.log(valorDesconto) ((pode dar esse erro:esta função n foi definida))
}

                                      / um valor declarado antes deça função n ira entrar na função ((é um escopo aberto))
diferença entre uma forma e outra-----
                                      \ ((é um escopo fechado))

const minhafuncao = () => {

} ((outra forma de criar uma function))

o que é um escopo de uma function: é de onde a funçoes inicia até onde ela termina ((escopo e difinida pelas "{}")) 

array((vetor))
  aprendemos a trabalhar com arrays, com os seguintes metodos:
    forEach: percorre cada elemento do array, disparando uma função, que recebe 2 parametros,
      no primerio parametro recebe o elemento que esta armazenado
      e na segunda posiçõa recebe o indice do array onde está armazenado o elemento
      
    .push: adiciona um elemento ao final do array

    .indexOf: procura e returna o indeci dentro do array

    .splice: ele remove um ou mais itens de um array de acordo com os parametos passado para a function
      o primeiro parametro é a posicao inicial da qual deseja iniciar a remoção
      o segundo parametro é quantos serao removidos a partir do parametro inicial

    .filter: procura e ele retorna o elemento que satisfaz a condição que é realizada dentro da função
      document.addEventListener('keydown', function() {
       const inputValue = document.querySelector('input').value;
       const arrayItems = ['banana', 'goiaba', 'xpto', 'foo', 'bar'];

       const carsFiltered = arrayItems.filter(item => item.includes(inputValue));
       console.log('-> encontrou ',carsFiltered);
    
    .map: retorna um novo vetor, de acordo com os itens do vetor que estao sendo percorrido 

  ((tanto para array como para strings)) .includes: retorna true ou false (verdadeiro ou falso, 1 ou 2) se o parametro passado para 
                                                    ele  atende a condição 
})

manipulação da DOM
  o que é DOM? document objecy Model (pagina)

  adicionar eventos dentro da DOM atraves de inpust,botoes elementos em geral
    exemplo: .addEventListener('click', funcao de callback)
  
  procurar elementos dentro da DOM:
    exemplo: .getElementById(): procura elemto pelo ID
             .querySelector(): procura o primero elemento que ele encontrar
                    exemplo de seletores: tagName, ID, classe
             .querySelectorall(): procuro todos os elementos e retorna um nodelist que é um vetor de elemento HTML
  
  criar elemetos HTMl de forma dinamica 
    exemplo: creatElement(): cria um elemetno HTML

  .appendChild(): cria um elemento filho dento do elemento pai
    (childNode e parentNode)

    section
      p

    p.parentNode ((vai pegar a section))
    p.childNode ((vai peger so p))

  manipular os elementos HTML, adicionando atributos, alterando atributos pegar valores dos atributos


storege: local storage
  

url - dominio privado da pagina

*/