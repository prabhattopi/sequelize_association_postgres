require('dotenv').config()
const _ = require('lodash');
const prevconfig = require('./config.json');
const defaultConfig = prevconfig.development;
const environment = process.env.NODE_ENV || 'development';
prevconfig[environment].host=process.env.DB_HOST
const environmentConfig = prevconfig[environment];
environmentConfig.host=process.env.DB_HOST
environmentConfig.username=process.env.DB_USERNAME
environmentConfig.password=process.env.DB_PASSWORD
environmentConfig.database=process.env.DB_DATABASE


const config = _.merge(defaultConfig, environmentConfig);
module.exports=config