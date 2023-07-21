const mongoose = require('mongoose');

const StatsSchema = new mongoose.Schema({
    totalProfit: {
        type: String,
        required: true,
    },
    activeLinks: {
        type: String,
        required: true,
    },
    totalWallets: {
        type: String,
        required: true,
    },
    totalViews: {
        type: String,
        required: true,
    }
});

const StatsLogs = mongoose.model('Statistics', StatsSchema);

module.exports = { StatsSchema, StatsLogs };