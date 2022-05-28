const bcrypt = require('bcryptjs');
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
    }
}, {
    timestamp: true,
});

//Hash password
userSchema.pre('save', async function(next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//varify password
userSchema.methods.isPasswordMatch = async function(entredpassword) {
    return await bcrypt.compare(entredpassword, this.password);
};


// compile schema into modal
const User = mongoose.model("User", userSchema);
module.exports = User;