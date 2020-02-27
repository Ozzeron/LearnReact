const mongoose = require('mongoose');

//
const ProfileSchema = mongoose.Schema({
    "id": Number,
    "name": String,
    "phoneNumber": Number,
    "lookingForAJob": Boolean
});

module.exports = mongoose.model('Profile', ProfileSchema);