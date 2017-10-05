const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const index = require('./routes/index')
const teachers = require('./routes/teachers')

app.use('/', index)
app.use('/teachers', teachers)

app.listen(3000, function(){
	console.log(`AYO JALAN!`)
})