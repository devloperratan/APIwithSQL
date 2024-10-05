const express = require("express");

const router = express.Router()

const User = require('../model/userModel');

router.post('/createUser', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const createdUser = await User.create(newUser);
        res.status(201).json(createdUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router