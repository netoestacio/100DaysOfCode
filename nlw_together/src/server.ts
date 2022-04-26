import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
    res.json({
        Status: "OK"
    })
})

app.listen(3000, () => {
    console.log('Server is running')
})