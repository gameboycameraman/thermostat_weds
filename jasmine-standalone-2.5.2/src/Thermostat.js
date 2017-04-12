'use strict';

function Thermostat(){

  var temperature = 20

  Thermostat.prototype.temperature = function() {
    return temperature
  };

  Thermostat.prototype.up = function () {
    temperature = temperature + 1;
  };

  Thermostat.prototype.down = function () {
    if (temperature > 10) {
    temperature = temperature - 1;
    } else {
      throw new Error("It's too cold man!");
    }
  };

};
