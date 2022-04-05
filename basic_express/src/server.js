const express = require('express')
const app = express()

const port  = 3000



app.get("/", (req, res) => {
    res.json({
        message: "Primeira Rota com Node_Express"
    })
})

app.listen(port, (req, res) => {
    console.log(`Server is runnning on ${port}`)
})