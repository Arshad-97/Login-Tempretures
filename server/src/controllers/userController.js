const expressAsyncHandler = require('express-async-handler');
const User = require("../modal/User");

//Registers a new
const registerUser = expressAsyncHandler(async(req, res) => {
    const { email, firstname, lastname, password } = req.body;

    //check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) throw new Error("User already exist");
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
});

//logins
const loginUser = expressAsyncHandler(async(req, res) => {
    const { email, password } = req.body;

    //Find user in db
    const userFound = await User.findOne({ email });

    //Check if the user password match
    if (userFound && (await userFound.isPasswordMatch(password))) {
        res.json({
            _id: userFound._id,
            firstname: userFound.firstname,
            lastname: userFound.lastname,
            email: userFound.email,
        });
    } else {
        res.status(401);
        throw new Error('Invalid login credentials');
    }
});

module.exports = { registerUser, loginUser }