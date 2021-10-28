require('dotenv').config()

const express = require('express')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/api/users', (req, res) => {
    res.json({
        users: [
            {username: 'Sam'},
            {username: "Kat"},
            {username: "Clem"}
        ]
    })
})

app.post('/api/register', (req, res) => {
    const newUser = req.body
    res.status(201).json(newUser)
})

app.post('/api/login', (req, res) => {
    if(req.body.username && req.body.password){
        res.status(200).json({ message: `Welcome ${req.body.username}`})
    } else {
        res.status(400).json({message: 'you are missing username or password'})
    }
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})