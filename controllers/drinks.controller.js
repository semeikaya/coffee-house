const Drinks = require("../models/Drinks.model.js")
module.exports.drinksController = {
    addDrinks: async (req, res) => {
        const { name, price, drinksInStock, isThereCaffeine, volume, drinkDescription } = req.body
        try {
            const drinks = await Drinks.create({
                name,
                price,
                drinksInStock,
                isThereCaffeine,
                volume,
                drinkDescription
            })
            res.json(drinks)
        } catch (error) {
            res.json(error.message)
        }
    },

    getDrinks: async (req, res) => {
        try {
            const drinks = await Drinks.find()
            const array = []
            for (const ar of drinks) {
                array.push({_id: ar._id, name: ar.name, price: ar.price })
            }
            res.json(
                    array
            )
        } catch (error) {
            res.json(error.message)
        }
    },
    getDrinksInStock: async (req, res) => {
        try {
            const drinks = await Drinks.find({ drinksInStock: true })
            const array = []
            for (const ar of drinks) {
                array.push({_id: ar._id, name: ar.name, price: ar.price })
            }
            res.json(
                    array
            )
        } catch (error) {
            res.json(error.message)
        }
    },
    getDrinksById: async (req, res) => {
        try {
            const drink = await Drinks.findById(req.params.id)
            res.json(drink)
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteDrinksById: async (req, res) => {
        try {
            await Drinks.findByIdAndRemove(req.params.id)
            res.json('Напиток удален')
        } catch (error) {
            res.json(error.message)
        }
    },
    updateDrinksById: async (req, res) => {
        const { name, price, drinksInStock, isThereCaffeine, volume, drinkDescription } = req.body
        try {
            const drink = await Drinks.findByIdAndUpdate(req.params.id, {
                name,
                price,
                drinksInStock,
                isThereCaffeine,
                volume,
                drinkDescription,
            })
            res.json(drink)
        } catch (error) {
            res.json(error.message)
        }
    },

}