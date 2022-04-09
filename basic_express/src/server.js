const express = require('express')
const logger = require('morgan')


const app = express()

app.use(express.json())
app.use(logger('dev'))

const port  = 3000

const products = [];

app.get("/", (req, res) => {
    res.json({
        message: "Primeira Rota com Node_Express"
    })
})

app.post("/products", (req, res) => {
    const body = req.body;
    console.log(body)
})

app.listen(port, (req, res) => {
    console.log(`Server is runnning on ${port}`)
})