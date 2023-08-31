const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Username was not provided"],
        maxLength: 30,
    },

    email: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;