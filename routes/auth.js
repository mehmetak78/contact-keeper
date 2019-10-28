
const express = require("express");
const router = express.Router();

// api/auth

router.get("/", (req,res) => {
    res.send("Get logged in user")
});

router.post("/", (req,res) => {
    res.send("Login User")
});

module.exports = router;
