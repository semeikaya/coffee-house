const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

app.use(require("./routes/main.route.js"))
app.use(require("./routes/information.route.js"))
app.use(require("./routes/drinkavaible.route.js"))

mongoose.connect("mongodb+srv://bersyak:web2000web@cluster0.akjwcf0.mongodb.net/coffee", (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Успешно соединились с сервером MongoDB')

    app.listen(4000, () => {
        console.log('Сервер успешно запущен');
    });
})



