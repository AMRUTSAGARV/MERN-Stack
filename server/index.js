const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.listen(5000, () => {
    console.log("Server Listening to PORT 5000")
})