'use strict';

require('extend-error');

/**
 * `NotOverrideError` constructor.
 *
 * @api public
 */
var NotOverride = Error.extend('NotOverrideError', 100);

module.exports = NotOverride;
