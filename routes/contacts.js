
const express = require("express");
const router = express.Router();

// api/contacts

router.get("/", (req,res) => {
    res.send("Get All Users Contacts")
});

router.post("/", (req,res) => {
    res.send("And Contact")
});

router.put("/:id", (req,res) => {
    res.send("Update Contact")
});

router.delete("/:id", (req,res) => {
    res.send("Delete Contact")
});

module.exports = router;
