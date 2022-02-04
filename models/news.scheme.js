const mongoose = require('mongoose');
const { Schema } = mongoose

const newSchema = new Schema({
    title: {
        type: String,
        required:[true, "Hello title is required"],
        unique: true,
        minlength: 5,
        maxlength: 20,
        trim:true
    },
    description:{
        type: String,
        required: [true, "Hello Description is required"],
        minlength: 20,
        trim:true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    isValid: {
        type: Boolean,
        default:true
    },
    comment:{
        type: [Object],
    },
    reactions: {
        likes: {
            type: Number
        },
        dislikes: {
            type: Number
        }
    }
}, { timestamps:true})


module.exports = mongoose.model("News", newSchema);
