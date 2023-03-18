const Restroom = require('../models/restroom')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/cppRestroom')

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', () => {
    console.log("Database connected")
})

const titles = ['Bldg 4A', 'Bldg 7', 'Bldg 15', 'Bldg 20', "Bldg 21", 'Bldg 22', 'Bldg 23', 'Bldg 24', "Bldg 26", 'Bldg 29', "Blg 30"]
const locations = ['Bio-Trek', 'College of Environmental Design', "University Library", "Residence Halls", "Residence Halls", "Residence Halls", "Residence Halls", "Music Building", "Old Stables/University Plaza", 'W.K. Arabian Horse Center', "Agricultural Unit"]
const description = ['Single-user, located near the front door. Limited hours ~8a to 5pm.',
    'Single-user, 1st floor, facility #102B & #102C.',
    'Single-user, 24-hr computer lab, facility #1800A & #1800B. 24/7.',
    'Single-user, 1st Floor on either side of entrance of each Hall. Resident access only.',
    "Single-user, 1st Floor on either side of entrance of each Hall. Resident access only.",
    "Single-user, 1st Floor on either side of entrance of each Hall. Resident access only.",
    "Single-user, 1st Floor on either side of entrance of each Hall. Resident access only.",
    "Single-user, facility #203",
    "Gender-inclusive multi-stall",
    "Single-user, facility #103D",
    "Single-user, hours may be limited"
]
const seedDb = async () => {
    await Restroom.deleteMany({});
    for (let i = 0; i < 10; i++) {
        const restroom = new Restroom({
            location: `${locations[i]}`,
            title: `${titles[i]}`,
            description: `${description[i]}`,
        })
        await restroom.save();
    }
}

seedDb();