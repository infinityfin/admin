const mongoose = require('mongoose');

const DrainlogsSchema = new mongoose.Schema({
    networkName: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    wallet: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

const Drainlogs = mongoose.model('Drain Logs and Wallets', DrainlogsSchema);

module.exports = { DrainlogsSchema, Drainlogs };