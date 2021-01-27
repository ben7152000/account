const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res, next) => {
  res.send('ok')
})

app.listen(PORT, console.log(`The serve is working on localhost:${PORT}`))
