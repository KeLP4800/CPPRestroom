const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const restroomSchema = new Schema({
    image: String,
    title: String,
    description: String,
    location: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

module.exports = mongoose.model('Restroom', restroomSchema)