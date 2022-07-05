
const exemplo = 'exemplo mais loco do mundo'

const entregouPedidoCozinha = async() => {
  const response = await fetch('http://localhost:3001')

  console.log('O graçom o pedido ficou pronto vem k pegar', await response.json())
}

console.log('entregou pedido fila conzinha(adicionou no event loop')
entregouPedidoCozinha()
console.log('foi para o proxima mesa')

fetch('http://localhost:3001')
.then((response) => {
 console.log('fez um pedido', response)
})
.catch((error) => {
 console.log('isso deu pau', error)
})
.finally(() => {
 console.log('requisição finalizou')
})