function carregarCarros() {
  let carrosLocalStorage = localStorage.getItem('carrosCadastrados')

  if (carrosLocalStorage) {
    return JSON.parse(carrosLocalStorage)
  } else {
    localStorage.setItem('carrosCadastrados', JSON.stringify([]))

    return JSON.parse(localStorage.getItem('carrosCadastrados'))
  }
}

carregarCarros()

function cadastrarVeiculo(event) {
  event.preventDefault()

  const carroParaCadastrar = {
    modelo: document.getElementById('modelo').value,
    ano: document.getElementById('ano').value,
    marca: document.getElementById('marca').value,
    quantidade: 0
  }

  const carrosJaArmazenados = carregarCarros()

  carrosJaArmazenados.push(carroParaCadastrar)

  localStorage.setItem('carrosCadastrados', JSON.stringify(carrosJaArmazenados))

  document.getElementById('form-registration').reset()
}

function direcionarParaMovimentacao() {
  event.preventDefault()
  window.location.href = 'movimentacao.html'

  listarCarrosNaTela()
}

const criarSpansPassandoOIdentificadorPorParametro = identificador => {
  const span = document.createElement('span')
  const iconEdit = document.createElement('i')
  iconEdit.setAttribute('class', 'fas fa-edit')
  iconEdit.setAttribute('title', 'Editar')
  iconEdit.setAttribute('identificador', `${identificador}`)
  iconEdit.setAttribute('onclick', `onClickEdit(this)`)
  iconEdit.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;')

  if (document.getElementById('salvarMovimentacao')) {
    span.appendChild(iconEdit)
  }

  return span
}

function listarCarrosNaTela() {
  const carrosJaArmazenados = carregarCarros()

  let ul = document.querySelector('ul')

  if (ul) {
    ul.remove()
  }

  ul = document.createElement('ul')

  carrosJaArmazenados.forEach((item, identificador) => {
    const li = document.createElement('li')
    li.innerHTML = `Modelo: ${item.modelo} 
     Marca: ${item.marca}, 
     Ano: ${item.ano},
     quantidade: ${item.quantidade}
     `

    li.appendChild(criarSpansPassandoOIdentificadorPorParametro(identificador))
    ul.appendChild(li)
  })
  const sectionList = document.getElementById('bananana')

  console.log(';;;;; ', sectionList)

  if (sectionList) {
    document.getElementById('bananana').appendChild(ul)
  }
}

const botaoDeCadastrar = document.getElementById('botaoDeCadastrar')

if (botaoDeCadastrar) {
  botaoDeCadastrar.addEventListener('click', cadastrarVeiculo)
}

const acessarMovimentacao = document.getElementById('acessarMovimentacao')

if (acessarMovimentacao) {
  acessarMovimentacao.addEventListener('click', direcionarParaMovimentacao)
}
