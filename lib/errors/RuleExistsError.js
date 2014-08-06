'use strict';

require('extend-error');

/**
 * `RuleExistsError` constructor.
 *
 * @api public
 */
var RuleExists = Error.extend('RuleExistsError', 102);

module.exports = RuleExists;
