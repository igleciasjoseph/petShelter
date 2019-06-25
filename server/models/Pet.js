const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "All pets must have a name!"],
        minlength: [3, "At least 3 characters long!"]
    },
    type: {
        type: String,
        required: [true,"Please enter a type."],
        minlength: [3, "Must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required please"],
        minlength: [3, "Description must be at least 3 characters"]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

mongoose.model("Pet", PetSchema);