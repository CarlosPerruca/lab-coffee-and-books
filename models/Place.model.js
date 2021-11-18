const { Schema, model } = require("mongoose");

const placeSchema = new Schema({
    name: {
        type: String,
        unique: true,
    },
    type: {
        type: String,
        enum: ['coffee shop', 'bookstore'],
    },
    timestamp: Date,
});

const Place = model("Place", placeSchema);

module.exports = Place;

//create, update, delete and display all the places