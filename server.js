const express = require('express')
const userRouter = require('./controller/user.js')
const methodOverride = require('method-override')
const app = express()
const port = 3000

app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(__dirname + '/public'))


app.use('/user', userRouter)

app.listen(port, () => {
    console.log(`Server is connected to port ${port}`)
})