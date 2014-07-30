/* global describe, it, expect */

var Backend = require('../lib/backend'),
    errors = Backend.errors;

describe('Backend', function() {

  var backend = new Backend();

  it('addRule should throw error', function() {
    expect(function() {
      backend.addRule();
    })
    .to
    .throw(errors.NotOverride, 'Backend#addRule must be overridden by subclass');
  });

  it('getRules should throw error', function() {
    expect(function() {
      backend.getRules();
    })
    .to
    .throw(errors.NotOverride, 'Backend#getRules must be overridden by subclass');
  });

});
