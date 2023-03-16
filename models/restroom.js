const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const restroomSchema = new Schema({
    title: String,
    description: String,
    location: String
});

module.exports = mongoose.model('Restroom', restroomSchema)