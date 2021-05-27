const express = require('express');
const router = express.Router();
const User = require('./model/user')
const bcrypt = require('bcrypt');
const constants = require('./constants')
router.post('/avatar', constants.upload.single('file'),async (req, res) => {
    let id = req.authenticateUser._id;
    let update = req.body;
    update.avatar = req.file.originalname
    User.findByIdAndUpdate(id, update, { new: true }, function (err, result) {
        if (err) return res.send(err)
        res.json(result)
    });
})


module.exports = router