"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('conventional-commit-types');
var path = require('path');
var fs = require('fs');
var customConf = null;
var currentPath = process.cwd() || path.resolve(__dirname, '../');
var configFile = path.join(currentPath, './.cz-conventional-changelog/config.js');
if (fs.existsSync(configFile)) {
    customConf = require(configFile);
}


module.exports = engine({
    types: customConf.types || conventionalCommitTypes.types,
    steps: customConf.steps || {},
    message: customConf.message || {}
});
