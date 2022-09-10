const { Router } = require('express')
const router = Router()
const { drinksController } = require('../controllers/drinks.controller.js')


router.get('/drinks/', drinksController.getDrinks)
router.get('/drinks/in-stock', drinksController.getDrinksInStock)
router.get('/drinks/:id', drinksController.getDrinksById)
router.post('/drinks/', drinksController.addDrinks)
router.delete('/drinks/:id', drinksController.deleteDrinksById)
router.patch('/drinks/:id', drinksController.updateDrinksById)


module.exports = router