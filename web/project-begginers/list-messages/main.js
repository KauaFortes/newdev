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

  const sessionMessages = document.getElementById('section-messages')

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

  const li = document.createElement('li')
  li.innerHTML = `
  de: ${message.from} 
  para: ${message.to} 
  mensagem ${message.message}`

  ul.appendChild(li)
}
buttonAddMenssage.addEventListener('click', addMenssage)
