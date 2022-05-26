const buttonSendMenssage = document.getElementById('buttonSendMenssage')

const messages = []

function addMessage(event) {
  event.preventDefault() //desabilita o evento padrão do elemento

  const inputName = document.getElementById('name')
  const inputEmail = document.getElementById('email')
  const inputMens = document.getElementById('mens')

  const mens = {
    name: inputName.value,
    email: inputEmail.value,
    mens: inputMens.value
  }
  messages.push(mens)

  document.getElementById('forme').reset()
  console.log('imprimeir vetor', mens)
}

buttonSendMenssage.addEventListener('click', addMessage)
