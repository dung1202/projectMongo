const express = require('express');
const router = express.Router();
const User = require('./model/user')
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    let body = req.body
    const userExist = await User.findOne({
        email: req.body.email
    });
    if(userExist) {
        return res.status(400).send({ err: 'Email already exist' });
    }
    const saltRounds = 10;
    let passwordHash = await bcrypt.hash(req.body.password, saltRounds);
    body.password = passwordHash
    let user = new User(body)
    user.save((err) => {
        if (err) throw err;
        console.log('User save successfully');
    })
    res.json({ "data": user })
})
module.exports = router