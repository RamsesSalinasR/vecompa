const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');


const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({success: false, msg: 'Failed to registrate User'});
        } else {
            res.json({success: true, msg: 'User registrated'});
        }
    })

});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATED');
});

//Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

//Validate
router.get('/validate', (req, res, next) => {
    res.send('VALIDATED');
});



module.exports = router;
