/* jshint unused: false */
'use strict';

var NotOverride = require('./errors/NotOverrideError'),
    RuleExists = require('./errors/RuleExistsError'),
    InvalidArguments = require('./errors/InvalidArgumentsError');

/**
 * `Backend` constructor.
 *
 * @api public
 */
function Backend() {
}

/**
 * Add a rule for the given role.
 *
 * @param {String} role Role ID.
 * @param {String} resource Resource ID.
 * @param {Array} actions An array of actions to add for the given role and resource.
 * @param {Function} cb Callback function.
 * @api public
 */
Backend.prototype.addRule = function(role, resource, actions, cb) {
  throw new NotOverride('Backend#addRule must be overridden by subclass');
};

/**
 * Get all rules defined for the specified resource.
 *
 * @param {String} resource Resource ID.
 * @param {Function} cb Callback function.
 * @return {Array} Rules found.
 * @api public
 */
Backend.prototype.getRules = function(resource, cb) {
  throw new NotOverride('Backend#getRules must be overridden by subclass');
};

exports = module.exports = Backend;

exports.errors = {};
exports.errors.NotOverrideError = NotOverride;
exports.errors.RuleExistsError = RuleExists;
exports.errors.InvalidArgumentsError = InvalidArguments;
