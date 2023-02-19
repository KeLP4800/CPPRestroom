const express = require('express')
const ejsMate = require("ejs-mate")
const path = require('path')
const methodOverride = require('method-override')

const app = express()

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    res.render('home')
})

app.get('/CPPRestroom', async (req, res) => {
    res.render('CPPRestroom/show')
})

app.listen(3000, () => {
    console.log("listening to port 3000")
})