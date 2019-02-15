const mongoose = require('mongoose');
const db = require('../libs/db');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    vote: Number,
    createdAt: { type: Date, default: Date.now },
    editedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: 1 },
    isDeleted: { type: Boolean, default: 0 },
});

module.exports.Product = db.model('Product', productSchema);