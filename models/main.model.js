const mongoose = require('mongoose')
const mainSchema = mongoose.Schema({
    header: String,
    text: String,
    categoryID: mongoose.SchemaTypes.ObjectId,
})
const Main = mongoose.model('Main', mainSchema)
module.exports = Main