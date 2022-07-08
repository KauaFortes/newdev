const express = require('express')
const cors = require('cors')

const routes = require('./routes')

const app = express()

const PORT = 3005


app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`api is listeing on port ${PORT}`)
}) 
