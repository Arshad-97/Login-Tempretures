const User = require("../modal/User.js");

//Registers a new
const registerUser = async(req, res) => {
    const { email, firstname, lastname, password } = req.body;

    //check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) console.log('User already exist');
    try {
        const user = await User.create({
            email,
            firstname,
            lastname,
            password
        });
        res.status(200).json(user);
    } catch (error) {
        res.json(error);
    }
};

module.exports = { registerUser }