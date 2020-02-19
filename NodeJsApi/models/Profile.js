const mongoose = require('mongoose');

//
const ProfileSchema = mongoose.Schema({
    "name": String
});

module.exports = mongoose.model('Profile', ProfileSchema);