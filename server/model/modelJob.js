const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    day: {
        type : Date,
        require : true,
    },
    startTime: {
        type : String,
        require : true,
        format : /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/,
    },
    endTime: {
        type : String,
        require : true,
        format : /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/,
    },
    employ: {
        type : String,
        require : true,
    },
    pos: {
        type : String,
        require : true,
        default : 'Cửa hàng',
    }
})

const Jobdb = mongoose.model('jobdb', schema, 'job')

module.exports = Jobdb;