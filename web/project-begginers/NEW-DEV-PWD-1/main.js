let record = []
let identificadorQueTaSendoEditado = null

const loadPeoples = () => {
  const itemsJaArmazenados = localStorage.getItem('pessoas lsitadas')
  return itemsJaArmazenados ? JSON.parse(itemsJaArmazenados) : []
}

const onClickEdit = element => {
  const identificadorASerEncontrado = element.getAttribute('identificador')

  identificadorQueTaSendoEditado = +identificadorASerEncontrado

  const peoples = loadPeoples()
  console.log('corregar pessoas', peoples)
  let pessoaEncontrada = {
    firtsName:'',
    lastName:'',
    address:'',
    city:'',
    cod:'',
    country:'',
    phoneNumber:'',
    email:'',


  }

  peoples.forEach((pessoa, identificador) => {
    if (identificador == identificadorASerEncontrado) {
      pessoaEncontrada.firtsName = pessoa.firtsName
      pessoaEncontrada.lastName = pessoa.lastName
      pessoaEncontrada.address = pessoa.address0
      pessoaEncontrada.city = pessoa.city
      pessoaEncontrada.cod = pessoa.cod
      pessoaEncontrada.country = pessoa.country
      pessoaEncontrada.phoneNumber = pessoa.phoneNumber
      pessoaEncontrada.email = pessoa.email
    }
  })
document.getElementById('firtsName').value = pessoaEncontrada.firtsName
document.getElementById('lastName').value = pessoaEncontrada.lastName
document.getElementById('address').value = pessoaEncontrada.address
document.getElementById('city').value = pessoaEncontrada.city
document.getElementById('cod').value = pessoaEncontrada.cod
document.getElementById('country').value = pessoaEncontrada.country
document.getElementById('phoneNumber').value = pessoaEncontrada.phoneNumber
document.getElementById('email').value = pessoaEncontrada.email
}

const onClickRemove = element => {
  const identificadorASerEncontrado = +element.getAttribute('identificador')

  const pessoas = loadPeoples()
  pessoas.splice(identificadorASerEncontrado, 1)
  console.log('pessoas', pessoas)
  localStorage.setItem('listaDePessoas', JSON.stringify(pessoas))
  listPeoples()
}

const span = identificador => {
  const span = document.createElement('span')
  const iconEdit = document.createElement('i')
  iconEdit.setAttribute('class', 'fas fa-edit')
  iconEdit.setAttribute('title', 'Editar')
  iconEdit.setAttribute('identificador', `${identificador}`)
  iconEdit.setAttribute('onclick', `onClickEdit(this)`)
  iconEdit.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;')

  span.appendChild(iconEdit)

  const iconRemove = document.createElement('i')
  iconRemove.setAttribute('class', 'fas fa-trash')
  iconRemove.setAttribute('title', 'Remover')
  iconRemove.setAttribute('identificador', `${identificador}`)
  iconRemove.setAttribute('onclick', `onClickRemove(this)`)
  iconRemove.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;')

  span.appendChild(iconRemove)

  return span
}

const listPeoples = () => {
  const peoples = loadPeoples()

  let ul = document.querySelector('ul')
  if (ul) {
    ul.remove()
  }

  ul = document.createElement('ul')

  peoples.forEach((item, identificador) => {
    const li = document.createElement('li')
    li.innerHTML = `primeiro nome: ${item.firtsName},
    sobrenome: ${item.lastName}, 
    endereço: ${item.address},
    cidade: ${item.city}, 
    codigo: ${item.cod},
    pais: ${item.country},
    numero: ${item.phoneNumber},
    email do usuario ${item.email}`

    li.appendChild(span(identificador))
    ul.appendChild(li)
  })
  document.getElementById('tbody-messages').appendChild(ul)
}

listPeoples()

const addPeople = event => {
  event.preventDefault()
  const people = {
    firtsName: document.getElementById('firtsName').value,
    lastName: document.getElementById('lastName').value,
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    cod: document.getElementById('cod').value,
    country: document.getElementById('country').value,
    phoneNumber: document.getElementById('phoneNumber').value,
    email: document.getElementById('email').value
  }

  record = loadPeoples()

  record.push(people)

  //JSON transforma a stringify em obejto ou vice versa
  localStorage.setItem('pessoas lsitadas', JSON.stringify(record))

  document.querySelector('form').reset()

  listPeoples()
}
const addButton = document.getElementById('addButton')
addButton.addEventListener('click', addPeople)
