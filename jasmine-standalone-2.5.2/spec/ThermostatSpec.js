'use strict';

describe('Thermostat', function() {
  var thermostat;

  it('Thermostat starts at 20 degrees', function() {
    thermostat = new Thermostat();
    expect(thermostat.temperature()).toEqual(20);
  });


});
