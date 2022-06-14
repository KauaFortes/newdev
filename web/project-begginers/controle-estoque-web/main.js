let cars = []

let totalDeCarros = 0

let identificadorQueTaSendoEditado = null

const loadCars = () => {
  const itemsJaArmazenados = localStorage.getItem('listaDeCarros')
  return itemsJaArmazenados ? JSON.parse(itemsJaArmazenados) : []
}

const onClickEdit = element => {
  const identificadorASerEncontrado = element.getAttribute('identificador')

  identificadorQueTaSendoEditado = +identificadorASerEncontrado

  const cars = loadCars()
  console.log('carregar Carros', cars)
  let carroEncontrada = {
    model: '',
    brand: '',
    year: '',
    amount: ''
  }

  cars.forEach((carro, identificador) => {
    if (identificador === +identificadorASerEncontrado) {
      carroEncontrada.brand = carro.brand
      carroEncontrada.model = carro.model
      carroEncontrada.year = carro.year
      carroEncontrada.amount = carro.amount
    }
  })

  document.getElementById('model').value = carroEncontrada.model
  document.getElementById('brand').value = carroEncontrada.brand
  document.getElementById('year').value = carroEncontrada.year
  document.getElementById('amount').value = carroEncontrada.amount

  console.log('carroEncontrada', carroEncontrada)
}

const onClickRemove = element => {
  const identificadorASerEncontrado = +element.getAttribute('identificador')

  const carros = loadCars()
  carros.splice(identificadorASerEncontrado, 1)
  console.log('Carros', carros)
  localStorage.setItem('listaDeCarros', JSON.stringify(carros))
  listCars()
}

const salvarRegistroEditado = registroSendoEditado => {
  const carros = loadCars()
  const carrosAtualizados = carros.map((carro, index) => {
    if (identificadorQueTaSendoEditado === index) {
      carro.model = registroSendoEditado.model
      carro.brand = registroSendoEditado.brand
      carro.year = registroSendoEditado.year
      carro.amount = registroSendoEditado.amount
    }
    return carro
  })

  localStorage.setItem('listaDeCarros', JSON.stringify(carrosAtualizados))

  identificadorQueTaSendoEditado = null

  listCars()
  document.querySelector('form').reset()
}

const span = identificador => {
  const span = document.createElement('span')
  const iconEdit = document.createElement('i')
  iconEdit.setAttribute('class', 'fas fa-edit')
  iconEdit.setAttribute('title', 'Editar')
  iconEdit.setAttribute('identificador', `${identificador}`)
  iconEdit.setAttribute('onclick', `onClickEdit(this)`)
  iconEdit.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;')
 
  const iconRemove = document.createElement('i')
  iconRemove.setAttribute('class', 'fas fa-trash')
  iconRemove.setAttribute('title', 'Remover')
  iconRemove.setAttribute('identificador', `${identificador}`)
  iconRemove.setAttribute('onclick', `onClickRemove(this)`)
  iconRemove.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;')
  
  if (document.getElementById('form-registration')){
  span.appendChild(iconEdit)
  span.appendChild(iconRemove)
  }

  return span
}

const listCars = () => {
  const cars = loadCars()

  let ul = document.querySelector('ul')
  if (ul) {
    ul.remove()
  }

  ul = document.createElement('ul')

  cars.forEach((item, identificador) => {
    const li = document.createElement('li')
    li.innerHTML = `Modelo: ${item.model} 
     Marca: ${item.brand}, 
     Ano: ${item.year},
     quantidade: ${item.amount}
     `

    li.appendChild(span(identificador))
    ul.appendChild(li)
  })
  const seçãoDaLista = document.getElementById('list-section')
  if (seçãoDaLista) {
    document.getElementById('list-section').appendChild(ul)
  }
}

listCars()

const addCar = event => {
  event.preventDefault()

  const car = {
    model: document.getElementById('model').value,
    brand: document.getElementById('brand').value,
    year: document.getElementById('year').value,
    amount: document.getElementById('amount').value
  }

  console.log('total',totalDeCarros)

  if (onClickEdit) {
    console.log('after save registry', identificadorQueTaSendoEditado)
    if (
      identificadorQueTaSendoEditado ||
      identificadorQueTaSendoEditado === 0
    ) {
      salvarRegistroEditado(car)
      return
    }
  }

  cars = loadCars()

  console.log('after save registry')
  cars.push(car)

  localStorage.setItem('listaDeCarros', JSON.stringify(cars))

  document.querySelector('form').reset()

  listCars()
}

const botaoDeAdicionar = document.getElementById('btn')
if (botaoDeAdicionar) {
  botaoDeAdicionar.addEventListener('click', addCar)
}
