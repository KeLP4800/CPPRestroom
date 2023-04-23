const express = require('express')
const ejsMate = require("ejs-mate")
const Restroom = require('./models/restroom')
const path = require('path')
const mongoose = require('mongoose')
const Review = require('./models/review')
mongoose.connect('mongodb://127.0.0.1:27017/cppRestroom')

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', () => {
    console.log("Database connected")
})

const methodOverride = require('method-override')
const restroom = require('./models/restroom')


const app = express()

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    res.render('home')
})

app.get('/restrooms', async (req, res) => {
    const restrooms = await Restroom.find({});
    res.render('CPPRestroom/index', { restrooms })
})

app.get('/restrooms/:id', (async (req, res) => {
    const { id } = req.params;
    const restroom = await Restroom.findById(id).populate('reviews');
    //console.log(campground)
    res.render('CPPRestroom/show', { restroom })

}))

app.put('/restrooms/:id', (async (req, res) => {
    const { id } = req.params
    await Restroom.findByIdAndUpdate(id, { ...req.body.restroom })
    res.redirect(`/restrooms/${id}`)
}))

app.post('/restrooms/:id/reviews', (async (req, res) => {
    const restroom = await Restroom.findById(req.params.id);
    const review = new Review(req.body.review)
    restroom.reviews.push(review)
    await review.save();
    await restroom.save();
    res.redirect(`/restrooms/${restroom._id}`)
}))

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