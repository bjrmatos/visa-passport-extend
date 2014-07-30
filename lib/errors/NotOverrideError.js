'use strict';

require('extend-error');

var NotOverride = Error.extend('NotOverrideError', 100);

module.exports = NotOverride;
