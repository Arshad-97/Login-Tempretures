const mongoose = require('mongoose');

//schema object
const userSchema = mongoose.Schema({
    firstname: {
        required: [true, 'First name is required'],
        type: String,
    },
    lastname: {
        required: [true, 'Last name is required'],
        type: String,
    },
    email: {
        required: [true, 'Email is required'],
        type: String,
    },
    password: {
        required: [true, 'Password is required'],
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, {
    timestamp: true,
});

// compile schema into modal
const User = mongoose.model("User", userSchema);
module.exports = User;