const expressAsyncHandler = require('express-async-handler');
const Tempreture = require("../modal/Tempreture");

//Store Tempreture
const storeTempreture = expressAsyncHandler(async(req, res) => {
    const { tempreture, location, userId } = req.body;

    try {
        const tempretureStore = await Tempreture.create({
            tempreture,
            location,
            userId
        })
        res.json(tempretureStore);
    } catch (error) {
        res.json(error);
    }
});

//Fetch store tempreture details of each user
const fetchTempreture = expressAsyncHandler(async(req, res) => {
    const { userId } = req.body;
    try {
        const tempreture = await Tempreture.find({ userId :userId });
        res.json(tempreture);
    } catch (error) {
        res.json(error);
    }
});

module.exports = {
    storeTempreture,
    fetchTempreture
};