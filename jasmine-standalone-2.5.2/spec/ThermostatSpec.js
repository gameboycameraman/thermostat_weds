'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Thermostat starts at 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('can increase the temperature with an up function', function() {
    thermostat.up();
    expect(thermostat.temperature()).toBeGreaterThan(20);
  });

  it('can decrease the temperature with a down function', function() {
    thermostat.down();
    expect(thermostat.temperature()).toBeLessThan(20);
  });

  it('has a minimum temperature of 10 degrees', function() {
    for (var i = 1; i <= 10; i++) {
      thermostat.down();
    };

    expect(function() {
      thermostat.down()}).toThrowError("It's too cold man!");
    });

});
