const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    userPassword: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);