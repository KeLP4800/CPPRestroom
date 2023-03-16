const express = require('express')
const ejsMate = require("ejs-mate")
const Restroom = require('./models/restroom')
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/cppRestroom')

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', () => {
    console.log("Database connected")
})

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

app.get('/makeCPPRestroom', async (req, res) => {
    const restroom = new Restroom({ title: "Restroom 1", description: "very clean", location: "bldg 163" })
    await restroom.save();
    res.send(restroom);
})

app.get('/CPPRestroom', async (req, res) => {
    res.render('CPPRestroom/show')
})

app.listen(3000, () => {
    console.log("listening to port 3000")
})