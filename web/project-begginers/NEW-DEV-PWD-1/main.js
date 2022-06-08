let record = []

const iconEdit = document.createElement('i')
iconEdit.setAttribute('class', 'fas fa-edit')
iconEdit.setAttribute('title', 'Editar')
iconEdit.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;')

const iconRemove = document.createElement('i')
iconRemove.setAttribute('class', 'fas fa-trash')
iconRemove.setAttribute('title', 'Remover')
iconRemove.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;')


function onClickRemove(lineToRemove) {
  lineToRemove.remove();
}

function onClickEdit (lineEditing) {
  lineEditingInMoment = lineEditing;

  const [firtsName, lastName, address, city, cod, country, phoneNumber, email] = lineEditing.childNodes;
  document.getElementById('firtsName')
    .value = firtsName.innerHTML;

  document.getElementById('lastName')
    .value = lastName.innerHTML;

  document.getElementById('address')
    .value = address.innerHTML;

  document.getElementById('city')
    .value = city.innerHTML;

  document.getElementById('cod')
    .value = cod.innerHTML;

  document.getElementById('country')
    .value = country.innerHTML;

  document.getElementById('phoneNumber')
    .value = phoneNumber.innerHTML;

  document.getElementById('email')
    .value = email.innerHTML;
} 

const loadPeoples = () => {
  const itemsJaArmazenados = localStorage.getItem('pessoas lsitadas')
  return itemsJaArmazenados ? JSON.parse(itemsJaArmazenados) : []
}

const span = () => {
  const span = document.createElement('span')

  span.appendChild(iconEdit)
  span.appendChild(iconRemove)


  li.appendChild(span);

  li.setAttribute('id', `line${countRow}`);
  countRow += 1;

  iconEdit.setAttribute('onclick', `onClickEdit(${span.parentElement.id});`);
  iconRemove.setAttribute('onclick', `onClickRemove(${span.parentElement.id});`)

  if (lineEditingInMoment) {
    const [firtsNameToUpdate, lastNameToUpdate, addressToUpdate, cityToUpdate, codToUpdate, countryToUpdate, phoneNumberToUpdate, emailToUpdate] = 
      lineEditingInMoment.childNodes;
    
      firtsNameToUpdate.innerHTML = message.firtsName;
      lastNameToUpdate.innerHTML = message.lastName;
      addressToUpdate.innerHTML = message.addressTo;
      cityToUpdate.innerHTML = message.city;
      codToUpdate.innerHTML = message.cod;
      countryToUpdate.innerHTML = message.country;
      phoneNumberToUpdate.innerHTML = message.phoneNumber;
      emailToUpdate.innerHTML = message.email;

    lineEditingInMoment = null;
  } else {
    tbody-messages.appendChild(li);
  } 
  return span
}

const listPeoples = () => {
  const peoples = loadPeoples()

  let ul = document.querySelector('ul')
  if (ul) {
    ul.remove()
  }

  ul = document.createElement('ul')

  peoples.forEach((item, index) => {
    const li = document.createElement('li')
    li.innerHTML = 
    `primeiro nome: ${item.firtsName},
    sobrenome: ${item.lastName}, 
    endereço: ${item.address},
    cidade: ${item.city}, 
    codigo: ${item.cod},
    pais: ${item.country},
    numero: ${item.phoneNumber},
    email do usuario ${item.email}`

    li.appendChild(span())
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
