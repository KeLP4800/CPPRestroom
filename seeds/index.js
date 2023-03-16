const Restroom = require('../models/restroom')

mongoose.connect('mongodb://127.0.0.1:27017/cppRestroom')

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', () => {
    console.log("Database connected")
})

const seedDb = async () => {
    await CppRestroom.deleteMany({});
    const c = new Restroom({ title:})
}
