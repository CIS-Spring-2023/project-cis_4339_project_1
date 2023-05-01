const express = require('express')
const router = express.Router()
const org = process.env.ORG


const { users } = require('../models/models')
const bcrypt = require('bcrypt')


// Login API
router.post('/', async (req, res, next) => {
    const {username, password} = req.body;
    const hashpassword = await bcrypt.hash(password,10);
    if (!(username && password))
    {
        res.status(400).json({error: "Username and Password required"})
    }
    try {
        let user = await users.findOne({ username });
        if (!user){
           return res.status(400).json({error: "Username or Password incorrect"});
        }
        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({
                error: "Username or Password incorrect",
                hashpassword: hashpassword

            });
            }
        res.json(user);
    }
    catch (err) {
        console.log(err)
        return next(err)
    }
    })

    module.exports = router
