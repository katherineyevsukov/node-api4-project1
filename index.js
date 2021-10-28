require('dotenv').config()

const express = require('express')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/api/users', (req, res) => {
    res.json({
        users: [
            {name: 'Sam'},
            {name: "Kat"},
            {name: "Clem"}
        ]
    })
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})