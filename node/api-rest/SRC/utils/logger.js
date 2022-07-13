const EventsEmitter = require('events')

const path = require('path');
// path é oq encontra o caminho até aq
const fs = require('fs');
// fs trabalha com sistemas

const emitter = new EventsEmitter()

emitter.on('log', (message) => {
  fs.appendFile(path.join(__dirname, 'error.log'),
  message,
  (err) => {
      if (err) { throw err }
    }
  )
})

function log(message) {
  emitter.emit('log', message)
}


module.exports = log