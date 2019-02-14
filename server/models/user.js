const mongoose = require('mongoose');
const db = require('../libs/db');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true },
    login: { type: String, min: 1, max: 50, required: true },
    username: { type: String, min: 1, max: 50 },
    firstname: { type: String, min: 1, max: 50, required: true },
    lastname: { type: String, min: 1, max: 50, required: true },
    password: { type: String, min: 1, max: 255, required: true },
    createdAt: { type: Date, default: Date.now },
    editedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: 1},
    isDeleted: {type: Boolean, default: 0},
});

module.exports.User= db.model('User', userSchema);