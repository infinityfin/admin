const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const { Drainlogs } = require('./drains/drainlogs.entity');
const { Company } = require('./companies/company.entity');
const { StatsLogs } = require('./stats/stats.entity');

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
    resources: [StatsLogs, Company, Drainlogs],
    rootPath: "/"
};

module.exports = options;