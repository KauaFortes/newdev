let countRow = 0
let lineEditingInMoment = null

function onClickRemove(lineToRemove) {
  lineToRemove.remove()
}
function onClickEdit(lineEditing) {
  lineEditingInMoment = lineEditing
  //foreach é um metado que percorre todos os elementos de dentor do vetor
  //  lineEditing.childNodes.forEach((valor, index) => {
  //  console.log('valor: ', valor)
  //  console.log('index: ', index)
  //});

  //const fromValue = lineEditing.childNodes[0].innerHTML
  //const toValue = lineEditing.childNodes[1].innerHTML
  //const messageValue = lineEditing.childNodes[2].innerHTML

  // desestruturaçõa de array
  const [from, to, message] = lineEditing.childNodes
  document.getElementById('from').value = from.innerHTML

  document.getElementById('to').value = to.innerHTML

  document.getElementById('message').value = message.innerHTML
}

function onClickDelete(lineDelete) {
  console.log('lineDelete:', lineDelete)
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
  iconEdit.setAttribute('title', 'Editar')
  iconEdit.setAttribute('style', 'cursor:pointer;  margin-inline:0.5rem')
  tdButtons.appendChild(iconEdit)

  const iconRemove = document.createElement('i')
  iconRemove.setAttribute('class', 'fas fa-trash-can')
  iconRemove.setAttribute('title', 'Remover')
  iconRemove.setAttribute('style', 'cursor:pointer; margin-inline:0.5rem')
  tdButtons.appendChild(iconRemove)

  const iconDown = document.createElement('i')
  iconDown.setAttribute('class', 'fa-solid fa-arrow-down')
  iconDown.setAttribute('title', 'mover para baixo')
  iconDown.setAttribute('style', 'cursor:pointer; margin-inline:0.5rem')
  tdButtons.appendChild(iconDown)

  const iconUp = document.createElement('i')
  iconUp.setAttribute('class', 'fa-solid fa-arrow-up')
  iconUp.setAttribute('title', 'mover para cima')
  iconUp.setAttribute('style', 'cursor:pointer; margin-inline:0.5rem')
  tdButtons.appendChild(iconUp)

  tr.appendChild(tdButtons)

  // precisamos IDentificar a linha

  tr.setAttribute('id', `line${countRow}`)
  countRow += 1

  iconEdit.setAttribute('onclick', `onClickEdit(${tdButtons.parentElement.id})`)
  iconRemove.setAttribute('onclick', `onClickRemove(${tdButtons.parentElement.id})`)

  if (lineEditingInMoment) {
    const [fromToUpdate, toToUpdate, messageToUpdate] =
      lineEditingInMoment.childNodes
    fromToUpdate.innerHTML = message.from
    toToUpdate.innerHTML = message.to
    messageToUpdate.innerHTML = message.message
    lineEditingInMoment = null
  } else {
    tbody.appendChild(tr)
  }
  document.getElementById('form-message').reset()
}
buttonAddMenssage.addEventListener('click', addMenssage)
