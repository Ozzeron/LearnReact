const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.header("Access-Control-Allow-Origin", "http://localhost:3000/users"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(users);
    }catch (e) {
        res.json({message: e})
    }
});



module.exports = router;