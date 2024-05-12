const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    username : {
        type: String,
        require: true,
        unique: true,
    },
    password : {
        type: String,
        require: true,
    }
})

const Admindb = mongoose.model('admindb', schema, 'admin');

module.exports = Admindb;