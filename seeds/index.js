const Restroom = require('../models/restroom')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/cppRestroom')

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', () => {
    console.log("Database connected")
})

const titles = ['Bldg 4A', 'Bldg 7', 'Bldg 15', 'Bldg 20', "Bldg 21", 'Bldg 22', 'Bldg 23', 'Bldg 24', "Bldg 26", 'Bldg 29', "Bldg 30", "Bldge 32", "Bldge 35"]
const locations = ['Bio-Trek', 'College of Environmental Design', "University Library", "Residence Halls", "Residence Halls", "Residence Halls", "Residence Halls", "Music Building", "Old Stables/University Plaza", 'W.K. Arabian Horse Center', "Agricultural Unit", "Beef Unit", "Bronco Student Center"]
const description = ['Single-user, located near the front door. Limited hours ~8am to 5pm.',
    'Single-user, 1st floor, facility #102B & #102C.',
    'Single-user, 24-hr computer lab, facility #1800A & #1800B. 24/7.',
    'Single-user, 1st Floor on either side of entrance of each Hall. Resident access only.',
    "Single-user, 1st Floor on either side of entrance of each Hall. Resident access only.",
    "Single-user, 1st Floor on either side of entrance of each Hall. Resident access only.",
    "Single-user, 1st Floor on either side of entrance of each Hall. Resident access only.",
    "Single-user, facility #203",
    "Gender-inclusive multi-stall",
    "Single-user, facility #103D",
    "Single-user, hours may be limited",
    "Single-user, hours may be limited",
    "Open to the public from 8 am- 6 pm. First Floor-centrally located off the ATM alcove (between Poly Fresh Market and Student Government offices). Second Floor-North end, past ASI Financial Services window, down the 2100 corridor"
]
const image = ["https://images.unsplash.com/photo-1617198191416-f6e6b0de337f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1626187915749-9deea4478548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1586798271654-0471bb1b0517?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
    "https://images.unsplash.com/photo-1591727826491-c30be2c4fd21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1584735745755-def60b55958f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1632681179698-35ac572f6510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1664369122715-2683b67830cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1668493167704-065e2295d76c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1672192951477-8e74f2af3369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1557430443-0bfb2ceb6525?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1569597967185-cd6120712154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1627590927988-c4ce4a2dc113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1606584179561-7700a46c1d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
];
const seedDb = async () => {
    await Restroom.deleteMany({});
    for (let i = 0; i < titles.length; i++) {
        const restroom = new Restroom({
            location: `${locations[i]}`,
            title: `${titles[i]}`,
            description: `${description[i]}`,
            image: `${image[i]}`
        })
        await restroom.save();
    }
}

seedDb();