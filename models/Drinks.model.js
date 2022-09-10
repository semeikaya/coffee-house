const mongoose = require('mongoose')
const drinksSchema = mongoose.Schema({
    name: String,
    price: Number,
    drinksInStock: Boolean,
    isThereCaffeine: Boolean,
    volume: Number, 
    drinkDescription: String
})

const Drinks = mongoose.model('Drinks', drinksSchema)
module.exports = Drinks

