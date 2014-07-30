'use strict';

require('extend-error');

var InvalidArguments = Error.extend('InvalidArgumentsError', 101);

module.exports = InvalidArguments;
