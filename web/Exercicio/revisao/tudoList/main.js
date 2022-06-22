let haFazeres = []


const caregarHaFazeres = () => {
  const itemsJaArmazenados = localStorage.getItem('listaDeHaFazeres')
  return itemsJaArmazenados ? JSON.parse(itemsJaArmazenados) : []
}

const listarHaFazeres = () => {
  const haFazers = caregarHaFazeres
  console.log('listarHaFazeres recebeu', haFazers)

  let ul = document.querySelector('ul')
  if (ul) {
    ul.remove()
  }

  haFazeres.forEach((item, index) => {
    const li = document.createElement('li')
    li.innerHTML = `oqueFazer: ${item.fazer}`
  })


  ul = document.createElement('ul')
}

const addHaFazeres = event => {
  event.preventDefault()

  const fazerisso = {
    fazerisso: document.getElementById('fazer').value
  }

  haFazeres = caregarHaFazeres()
  haFazeres.push(fazerisso)

  localStorage.setItem('listaDeHaFazeres', JSON.stringify(fazerisso))

  console.log('recebeu', fazerisso)
  document.querySelector('form').reset()
}

const botaoDeAdicionar = document.getElementById('btn')
botaoDeAdicionar.addEventListener('click', addHaFazeres)