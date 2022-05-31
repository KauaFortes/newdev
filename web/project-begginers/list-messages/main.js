let countRow = 0

function onClickEdit (idRecord) {
  console.log('chamaou a funçao para editar', idRecord)
}

const buttonAddMenssage = document.getElementById('addButton')

function addMenssage(event) {
  event.preventDefault()
  const inputFrom = document.getElementById('from')
  const inputTo = document.getElementById('to')
  const textArea = document.getElementById('message')

  if (!inputFrom.value.length) {
    alert('O remetente deve ser informado')
    return
  }
  if (!inputTo.value.length) {
    alert('O destinatario deve ser informado')
    return
  }
  //O trim remove os espaços do inicio e do fim da string
  textArea.value = textArea.value.trim()
  if (!textArea.value.length) {
    alert('A mensagem deve ser informada')
    return
  }

  const message = {
    from: inputFrom.value,
    to: inputTo.value,
    message: textArea.value
  }

  console.log('-->', message)

  /* const sessionMessages = document.getElementById('section-messages')

  //buscamos uma lista não ordenada dentro da seção, para validarmos
  //se existe ou não, se não existir, criamos ela
  let ul = sessionMessages.querySelector('ul')

  if (!ul) {
    //criamos uma lista não ordenada
    ul = document.createElement('ul')
    //adiciona dentro da seção
    sessionMessages.appendChild(ul)
  }
  document.getElementById('form-message').reset()

  const table = document.createElement('table')
  table.innerHTML = `  

   ${messages.from}
    ${messages.to}
   ${messages.message}

  ul.appendChild(table) */
  const tbody = document.getElementById('tbody-messages')

  const tr = document.createElement('tr')

  //preimeira coluna
  const tdfrom = document.createElement('td')
  tdfrom.innerHTML = message.from

  // segunda coluna
  const tdto = document.createElement('td')
  tdto.innerHTML = message.to

  // terceira coluna
  const tdmessage = document.createElement('td')
  tdmessage.innerHTML = message.message

  tr.appendChild(tdfrom)
  tr.appendChild(tdto)
  tr.appendChild(tdmessage)

  const tdButtons = document.createElement('td')

  const iconEdit = document.createElement('i')
  iconEdit.setAttribute('class', 'fa-solid fa-pen-to-square')
  iconEdit.setAttribute('style', 'cursor:pointer')
  tdButtons.appendChild(iconEdit)
  
  
  const iconRemove = document.createElement('i')
  iconRemove.setAttribute('class', 'fas fa-trash-can')
  iconRemove.setAttribute('style', 'cursor:pointer')
  tdButtons.appendChild(iconRemove)
  
  tr.appendChild(tdButtons)

  // precisamos IDentificar a linha
  tr.setAttribute('id', countRow)
  countRow += 1
  
  iconEdit.setAttribute('onclick', `onClickEdit(${tdButtons.parentElement.id});`)
  

  tbody.appendChild(tr)

  document.getElementById('form-message').reset()
}
buttonAddMenssage.addEventListener('click', addMenssage)
