const express = require('express')
const app = express()
const cors =require('cors')
const mongoose = require ('mongoose')

app.use(cors())
app.use(express.json())  //telling express that anything coming to body should be passed on as JSON.

mongoose.connect('mongodb://localhost:2701')

app.post('/api/register', (req, res) => {
    console.log(req,body)
    res.json({ status: 'ok' })
})

app.listen(5000, () => {
    console.log("Server Listening to PORT 5000")
})