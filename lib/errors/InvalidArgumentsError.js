'use strict';

require('extend-error');

/**
 * `InvalidArgumentsError` constructor.
 *
 * @api public
 */
var InvalidArguments = Error.extend('InvalidArgumentsError', 101);

module.exports = InvalidArguments;
