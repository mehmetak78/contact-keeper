const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema (
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,

        },
        phone: {
            type: String
        },
        type: {
            type: String,
            default: "Personal"
        },
        date: {
            type: Date,
            default: Date.now
        }
    });

module.exports = mongoose.model("contact", ContactSchema);