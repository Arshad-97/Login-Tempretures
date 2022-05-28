const mongoose = require('mongoose');

//schema object
const expenseSchema = mongoose.Schema({
    tempreture: {
        required: [true, 'Tempreture is required'],
        type: mongoose.Schema.Types.Decimal,
    },
    location: {
        required: [true, 'Location is required'],
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'User ID is required']
    }
}, {
    timestamps: true,
});

const Tempreture = mongoose.model("Tempreture", expenseSchema);

module.exports = Tempreture;