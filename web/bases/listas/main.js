const buttonSendMenssage = 
document.getElementById('buttonSendMenssage')

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
  
  if (messages.length < 3) {
    messages.push(mens)
  } else {
    //chama o alert do browser
    alert('o vetor jaesta cheio')
  }

  //pegando o formulario e utilizando um metodo do form que é o reset
  document.getElementById('forme').reset()
  console.log('imprimeir vetor', messages)
}

//forma de identificar uma classe, é pela letra maiuscula
buttonSendMenssage.addEventListener('click', addMessage)


