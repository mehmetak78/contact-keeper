
const express = require("express");
const router = express.Router();

// api/users

router.post("/", (req,res) => {
    res.send("Registers a User")
});

module.exports = router;
