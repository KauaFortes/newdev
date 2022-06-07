let record = []


const addPeople = (event) => {
  event.preventDefault();
  const people = {
    firtsName: document.getElementById('firtsName').value,
    lastName: document.getElementById('lastName').value,
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    cod: document.getElementById('cod').value,
    country: document.getElementById('country').value,
    phoneNumber: document.getElementById('phoneNumber').value,
    email: document.getElementById('email').value,
  }

  const itemsJaArmazenados = localStorage.getItem('people')

  record = itemsJaArmazenados ? JSON.parse(itemsJaArmazenados) : []

  record.push(people)

  localStorage.setItem('people', JSON.stringify(record))

  document.querySelector('form').reset();

  const items = localStorage.getItem('people')

  const itemsSerialized = JSON.parse(items)


  //ul[{}, {}] - length = 2
  //itemsSerialized[{} {} {}] - length = 3
  let ul = document.querySelector('ul');
  if(ul) {
    ul.remove()
  }
  
  ul = document.createElement('ul')

  console.log('node list ul', ul.childNodes)
  itemsSerialized.forEach((item, index) => {
      const li = document.createElement('li')
      li.innerHTML = `primeiro nome: ${item.firstname}/ sobrenome: ${item.lastname}/ endereço: ${item.address}/ cidade: ${item.city}/ codigo: ${item.cod}/ pais: ${item.country}/ numero: ${item.phoneNumber}/ emailusuario ${item.email}/`
      console.log('ITEMS', item)
    
    ul.appendChild(li)
  })
  document.getElementById('tbody-messages').appendChild(ul)
}
  const addButton = document.getElementById('addButton');
  addButton.addEventListener('click', addPeople)