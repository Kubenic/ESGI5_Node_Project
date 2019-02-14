const mongoose = require('mongoose');
const db = require('../libs/db');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    login: String,
    username: { type: String, min: 1, max: 50 },
    firstname: { type: String, min: 1, max: 50 },
    lastname: { type: String, min: 1, max: 50 },
    password: { type: String, min: 1, max: 255 },
    createdAt: { type: Date, default: Date.now },
    editedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: 1},
    isDeleted: {type: Boolean, default: 0},
});

module.exports.User= db.model('User', userSchema);