let cars = []
let totalQuantity = 0
const loadCars = () => {
  const carrosJaArmazenados = localStorage.getItem('listCars')
  return carrosJaArmazenados ? JSON.parse(carrosJaArmazenados) : []
}

const addEntry = event => {
  event.preventDefault()

  cars = loadCars()

  cars.forEach((item, index) => {
    if (+document.getElementById('code').value === index) {
      if (document.getElementById('entry').value === 'E') {
        if (totalQuantity + +document.getElementById('quantity').value <= 200) {
          item.quantity += +document.getElementById('quantity').value
          totalQuantity += +document.getElementById('quantity').value
          console.log('quantidade', totalQuantity)
          document.querySelector('form').reset()
        } else {
          alert('o estoque passou de 200')

          document.querySelector('form').reset()
        }
      } else {
        console.log('quantidade', totalQuantity)
        item.quantity -= +document.getElementById('quantity').value
        totalQuantity -= +document.getElementById('quantity').value
        document.querySelector('form').reset()
      }
    }
  })

  localStorage.setItem('listCars', JSON.stringify(cars))
  listCars()
}

const listCars = carsParams => {
  const cars = carsParams ? carsParams : loadCars()

  let ul = document.querySelector('ul')
  if (ul) {
    ul.remove()
  }

  ul = document.createElement('ul')

  cars.forEach((item, index) => {
    const li = document.createElement('li')
    li.innerHTML = `código: ${index} 
      marca: ${item.brand} 
      tipo: ${item.type} 
      ano: ${item.age}
      quantidade: ${item.quantity}
     `

    ul.appendChild(li)
  })
  console.log(document.getElementById('list-section'))
  document.getElementById('list-section').appendChild(ul)
}
listCars()

const addCar = event => {
  event.preventDefault()

  const car = {
    brand: document.getElementById('brand').value,
    type: document.getElementById('type').value,
    age: document.getElementById('age').value,
    quantity: 0
  }

  cars = loadCars()

  cars.push(car)

  localStorage.setItem('listCars', JSON.stringify(cars))

  document.querySelector('form').reset()
  if (document.getElementById('list-section')) {
    listCars()
  }
}

const inputValue = document.getElementById('search')
inputValue.addEventListener('keyup', function () {
  cars = loadCars()

  const carsFilter = cars.filter(item => item.brand.includes(inputValue.value))
  console.log('funcionou?', carsFilter)

  listCars(carsFilter)
})

const buttonMovimentacao = document.getElementById('buttonAdd')
const buttonAddCar = document.getElementById('buttonForm')

buttonMovimentacao.addEventListener('click', addEntry)
if (buttonAddCar) {
  buttonAddCar.addEventListener('click', addCar)
}