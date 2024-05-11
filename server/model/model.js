const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    dob : {
        type: Date,
        require: true,
    },
    phone : {
        type: String,
        required: true,
    },
    address : {
        type: String,
        default: 'none',
    },
    position : {
        type: String,
        required: true,
    },
    status : String
})

const Userdb = mongoose.model('userdb', schema, 'employee');

module.exports = Userdb;