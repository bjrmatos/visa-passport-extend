/* global describe, it, expect */

var Backend = require('../lib/backend'),
    errors = Backend.errors;

describe('visa-passport-extend', function() {

  it('should export Backend constructor directly from package', function() {
    expect(Backend).to.be.a('function');
  });

  it('should export a \'errors\' object', function() {
    expect(errors).to.be.an('object');
  });

  it('should export \'NotOverrideError\' error class', function() {
    expect(errors.NotOverrideError).to.be.a('function');
  });

  it('should export \'InvalidArgumentsError\' error class', function() {
    expect(errors.InvalidArgumentsError).to.be.a('function');
  });

  it('should export \'RuleExistsError\' error class', function() {
    expect(errors.RuleExistsError).to.be.a('function');
  });
});
