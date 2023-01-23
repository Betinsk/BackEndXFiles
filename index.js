const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const Connection = require('./database/database.js')
const Character = require('./database/character')

try {
     Connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.use(express.static('public')) // Aplicacao aceita arquivos externos

  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())

  app.get('/', (req, res) => {
    res.send('X Files')
  })

  app.get('/register', (req, res) => {
    res.render('registerCharacter.ejs')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



