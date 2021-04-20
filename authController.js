const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('./model/user')

const bcrypt = require('bcrypt');
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Filter user from the users array by username and password
    const user = await User.findOne({
        email: email
    });
    let checkPass = false
    if (user) {
        checkPass = bcrypt.compareSync(password, user.password)
    }
    if (user && checkPass) {
        // Generate an access token
        const accessToken = jwt.sign({ email: user.email, _id: user._id }, process.env.SECRET_KEY);
        return res.json({
            accessToken
        });
    } else {
        return res.status(400).send({ err: 'Username or password incorrect' });
    }
})

module.exports = router