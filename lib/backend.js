/* jshint unused: false */
'use strict';

var NotOverride = require('./errors/NotOverrideError'),
    RuleExists = require('./errors/RuleExistsError'),
    InvalidArguments = require('./errors/InvalidArgumentsError');

function Backend() {
}

Backend.prototype.addRule = function(role, resource, actions, cb) {
  throw new NotOverride('Backend#addRule must be overridden by subclass');
};

Backend.prototype.getRules = function(resource, cb) {
  throw new NotOverride('Backend#getRules must be overridden by subclass');
};

exports = module.exports = Backend;

exports.errors = {};
exports.errors.NotOverrideError = NotOverride;
exports.errors.RuleExistsError = RuleExists;
exports.errors.InvalidArgumentsError = InvalidArguments;
