const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/cppRestroom')

mongoose.connection
    .once('open', () => {
        console.log("Database connected")
    })
    .on('error', console.error.bind(console, "connection error"));


