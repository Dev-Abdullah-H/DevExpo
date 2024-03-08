const express = require('express')
const router = express.Router()
const SignUp = require('../models/SignUp.cjs')

// Post request
router.post('/signup', async(req, res) => {
    const {name, username, email, password} = req.body
    const newSignUp = new SignUp(
        {name, username, email, password}
    )
    const savedSignUp = await newSignUp.save()
    res.json(savedSignUp)
})

// Get 
router.post('/login', async(req, res) => {
    const { email, password } = req.body
    const user = await SignUp.findOne({ email, password })
    if (user) {
        res.json(user)
    }
    else {
        res.status(500)
    }
})

module.exports = router