const express = require('express');
const path = require("path")
const constants = require('./constants')
const File = require('./model/file')

const router = express.Router();
router.post('/upload', constants.upload.single('file'),(req, res) => {
    let fileSave = new File({
        path: req.file.originalname
    })
    fileSave.save((err) => {
        if (err) throw err;
        console.log('File save successfully');
    })
    res.json({ "data": fileSave })
})

router.get('/:name', (req, res) => {
    const fileName = req.params.name;
    console.log('fileName', fileName);
    if (!fileName) {
        return res.send({
            status: false,
            message: 'no filename specified',
        })
    }
    res.sendFile(path.resolve(`./uploads/${fileName}`));
})

module.exports = router