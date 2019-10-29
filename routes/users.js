const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator/check");
const User = require("../models/User");
const config = require("config");

// api/users

router.post("/",
    [
        check("name", "Please add name")
            .not()
            .isEmpty(),
        check("email", "Please include a valie email")
            .isEmail(),
        check("password", "Please enter a password with 2 or more characters")
            .isLength({min:2})
    ],
    async (req, res) => {

        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {name, email, password} = req.body;

        try {

            let user = await User.findOne({email});

            if (user) {
                return res.status(400).json({msg: "User Already Exists"});
            }
            user = new User({
                                name,
                                email,
                                password
                            });

            const salt =  await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(payload, config.get("jwtSecret"), {expiresIn: 360000}, (err, token) => {
                if (err) throw err;
                res.json({token});
            } )
        }
        catch(err) {
            console.log(err.message);
            res.status(500).send("Server Error");
        }
    }
);

module.exports = router;
