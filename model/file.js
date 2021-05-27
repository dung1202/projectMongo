var mongoose = require('mongoose');

var fileSchema = mongoose.Schema({
    path: String,
    created: { 
        type: Date,
        default: Date.now
    }
});

var File = mongoose.model('File', fileSchema);
  
module.exports = File;