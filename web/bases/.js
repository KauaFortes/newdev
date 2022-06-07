const storage = localStorage;
let names = [];

const add = () => {
  console.log('add')

  const namesKey = storage.getItem('names');
  names = namesKey ? JSON.parse(namesKey) : []

  names.push({
    name: document.getElementById('name').value,
    lastName: document.getElementById('lastName').value
  });

  storage.setItem('names', JSON.stringify(names));

  if (names.length) {
    const ul = document.createElement('ul');

    names.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `${item.name} ${item.lastName}`;
      ul.appendChild(li);
    });

    document.getElementById('list-section').appendChild(ul);
  }


}

document.getElementById('btn').addEventListener('click', add)


/*

function onClickRemove(lineToRemove) {
  lineToRemove.remove()
}

function onClickEdit(lineEditing) {
  lineEditingInMoment = lineEditing

  const [name, lastName, address, city, cod, country, phoneNumber, email] =
    lineEditing.childNodes
  document.getElementById('name').value = name.innerHTML

  document.getElementById('lastName').value = lastName.innerHTML

  document.getElementById('address').value = address.innerHTML

  document.getElementById('city').value = city.innerHTML

  document.getElementById('cod').value = cod.innerHTML

  document.getElementById('country').value = country.innerHTML

  document.getElementById('phoneNumber').value = phoneNumber.innerHTML

  document.getElementById('email').value = email.innerHTML
}

  .getElementById('addButton')
  .addEventListener('click', function (event) {
    event.preventDefault()
    const name = document.getElementById('name').value
    const lastName = document.getElementById('lastName').value
    const address = document.getElementById('address').value
    const city = document.getElementById('city').value
    const cod = document.getElementById('cod').value
    const country = document.getElementById('country').value
    const phoneNumber = document.getElementById('phoneNumber').value
    const email = document.getElementById('email').value

    if (!name.length) {
      alert('O nome deve ser informado')
      return
    }

    if (!lastName.length) {
      alert('O nome deve ser informado')
      return
    }

    if (!address.length) {
      alert('O Endereço deve ser informado')
      return
    }

    if (!city.length) {
      alert('O Endereço deve ser informado')
      return
    }

    if (!cod.length) {
      alert('O Endereço deve ser informado')
      return
    }

    if (!country.length) {
      alert('O Endereço deve ser informado')
      return
    }

    if (!phoneNumber.length) {
      alert('O numero de telefone deve ser informado')
      return
    }

    if (!email.length) {
      alert('O Email deve ser informado')
      return
    }

    const record = {
      name,
      lastName,
      address,
      city,
      country,
      cod,
      phoneNumber,
      email
    }
    document.getElementById('form-record').reset()

    const tbody = document.getElementById('tbody-messages')
    const tr = document.createElement('tr')

    const tdName = document.createElement('td')
    tdName.innerHTML = record.name

    const tdLastName = document.createElement('td')
    tdLastName.innerHTML = record.lastName

    const tdAddress = document.createElement('td')
    tdAddress.innerHTML = record.address

    const tdCity = document.createElement('td')
    tdCity.innerHTML = record.city

    const tdcountry = document.createElement('td')
    tdcountry.innerHTML = record.country

    const tdcod = document.createElement('td')
    tdcod.innerHTML = record.cod

    const tdPhoneNumber = document.createElement('td')
    tdPhoneNumber.innerHTML = record.phoneNumber

    const tdEmail = document.createElement('td')
    tdEmail.innerHTML = record.email

    tr.appendChild(tdName)
    tr.appendChild(tdLastName)
    tr.appendChild(tdAddress)
    tr.appendChild(tdCity)
    tr.appendChild(tdcountry)
    tr.appendChild(tdcod)
    tr.appendChild(tdPhoneNumber)
    tr.appendChild(tdEmail)

    const tdButtons = document.createElement('td')

    const iconEdit = document.createElement('i')
    iconEdit.setAttribute('class', 'fas fa-edit')
    iconEdit.setAttribute('title', 'Editar')
    iconEdit.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;')
    tdButtons.appendChild(iconEdit)

    const iconRemove = document.createElement('i')
    iconRemove.setAttribute('class', 'fas fa-trash')
    iconRemove.setAttribute('title', 'Remover')
    iconRemove.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;')
    tdButtons.appendChild(iconRemove)

    tr.appendChild(tdButtons)

    tr.setAttribute('id', `line${countRow}`)
    countRow += 1

    iconEdit.setAttribute(
      'onclick',
      `onClickEdit(${tdButtons.parentElement.id});`
    )
    iconRemove.setAttribute(
      'onclick',
      `onClickRemove(${tdButtons.parentElement.id});`
    )

    if (lineEditingInMoment) {
      const [
        nameToUpdate,
        LastNameToUpdate,
        addressToUpdate,
        cityToUpdate,
        countryToUpdate,
        codToUpdate,
        phoneNumberToUpdate,
        emailToUpdate
      ] = lineEditingInMoment.childNodes

      nameToUpdate.innerHTML = record.name
      LastNameToUpdate.innerHTML = record.lastName
      addressToUpdate.innerHTML = record.address
      cityToUpdate.innerHTML = record.city
      countryToUpdate.innerHTML = record.country
      codToUpdate.innerHTML = record.cod
      phoneNumberToUpdate.innerHTML = record.phoneNumber
      emailToUpdate.innerHTML = record.email

      lineEditingInMoment = null
    } else {
      tbody.appendChild(tr)
    }
  })*/