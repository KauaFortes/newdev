let countRow = 0;
let lineEditingInMoment = null;

function onClickRemove(lineToRemove) {
  lineToRemove.remove();
}

function onClickEdit (lineEditing) {
  lineEditingInMoment = lineEditing;

  const [name, address, phoneNumber, email] = lineEditing.childNodes;
  document.getElementById('name')
    .value = name.innerHTML

  document.getElementById('address')
    .value = address.innerHTML

  document.getElementById('phoneNumber')
    .value = phoneNumber.innerHTML

  document.getElementById('email')
    .value = email.innerHTML
}

Document.getElementById('addRegistration')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value
    const address = document.getElementById('address').value
    const phoneNumber = document.getElementById('phoneNumber').value
    const email = document.getElementById('email').value

    if (!name.length) {
      alert('O nome deve ser informado')
      return
    }

    if (!address.length) {
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

    const record = {name, address, phoneNumber, email: recordValue}
    document.getElementById('form-record').reset()

    const tbody = document.getElementById('tbody-messages')
    const tr = document.createElement('tr')

    const tdName = document.createElement('td')
    tdName.innerHTML = record.name

    const tdAddress = document.createElement('td')
    tdAddress.innerHTML = record.address

    const tdPhoneNumber = document.createElement('td')
    tdPhoneNumber.innerHTML = record.phoneNumber

    const tdEmail = document.createElement('td')
    tdEmail.innerHTML = record.email

    tr.appendChild(tdName)
    tr.appendChild(tdAddress)
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
    countRow += 1;
      
    iconEdit.setAttribute('onclick', `onClickEdit(${tdButtons.parentElement.id});`)
    iconRemove.setAttribute('onclick', `onClickRemove(${tdButtons.parentElement.id});`)

    if (lineEditingInMoment) {
      const [nameUpdate, addressToUpdate, phoneNumberToUpdate, emailToUpdate] = lineEditingInMoment.childNodes;
      
      nameToUpdate.innerHTML = message.name
      addressToUpdate.innerHTML = message.address
      phoneNumbertoUpdate.innerHTML = message.phoneNumber
      emailToUpdate.innerHTML = message.email

      lineEditingInMoment = null
    } else {
      tbody.appendChild(tr)
    }
  })