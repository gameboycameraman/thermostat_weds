'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Thermostat starts at 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('can increase the temperature with an up function', function(){
    thermostat.up();
    expect(thermostat.temperature()).toBeGreaterThan(20);
  });


});
