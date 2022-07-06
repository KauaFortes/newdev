function checkStatusMEmory () {
  const os = require('os')
  const { parse } = require('path')

  // retorna o sistema operacional que esta sendo executado o node
  //console.log(os.platform())

  // retorna a memoria RAM
  const mem = parseInt(os.freemem() / 1024 / 1024)
  //console.log(mem)

  // retorna o total de memoria RAM
  const total = parseInt(os.totalmem() / 1024 / 1024)
  //console.log(total, mem)

  const parcentage = parseInt((mem / total) * 100)

  const statistics = {
  memryTotal: `${total}MB`,
  freeMemory: `${mem}MB`,
  usage: `${parcentage}%`
}
console.clear()
console.table(statistics)
}

setInterval(checkStatusMEmory, 1000)