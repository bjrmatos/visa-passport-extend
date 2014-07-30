'use strict';

require('extend-error');

var RuleExists = Error.extend('RuleExistsError', 102);

module.exports = RuleExists;
