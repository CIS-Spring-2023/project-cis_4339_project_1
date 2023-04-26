const bcrypt = require("bycryptjs")
const router = express.Router()
const express = require('express')
const org = process.env.ORG

const { users } = require('../models/models')



// Login API
router.post('/', async (req, res, next) => {
    const {username, password} = req.body

    if (!(username && password)) {
        res.status(400).json({error: "Username and Password required"})
    }
    try {
        let user = await user.findOne({ userename });
        if (!user){
           return res.status(400).json({error: "Username or Password incorrect"});
        }
        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({error: "Username or Password incorrect"});
        }

        res.json(user);

    }
    catch (err) {
        console.log(err)
        return next(err)
    }
    })