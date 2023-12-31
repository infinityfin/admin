const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    parentLink: {
        type: String,
        required: true,
    },
    redirect: {
        type: String,
        required: true,
    },
    viewsStatus: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

const Company = mongoose.model('Links', CompanySchema);

module.exports = { CompanySchema, Company };