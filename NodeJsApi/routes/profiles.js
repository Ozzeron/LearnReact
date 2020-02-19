const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');


router.get('/', async (req,res)=>{
   try {
       const someProfile = await Profile.find();
       res.json({message: someProfile})
   } catch (e) {
       res.json({message:e})
   }
});


module.exports = router;