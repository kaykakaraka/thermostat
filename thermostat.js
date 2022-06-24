const { REFUSED } = require("dns");
const { runInThisContext } = require("vm");
const { threadId } = require("worker_threads");

class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSavingMode = true;
  }

  up() {
    if (this.powerSavingMode == true && this.temp < 25) { 
      this.temp += 1;
    }
    else if (this.powerSavingMode == false && this.temp < 32) {
      this.temp += 1;
    };
  }

  down() {
    if (this.temp > 10) {
      this.temp -= 1;
    }
  }

  setPowerSavingMode(command) {
    this.powerSavingMode = command;
  }

  reset() {
    this.temp = 20;
  }

  getTemperature() {
    return this.temp;
  }

  getEnergyUsage() {
    if (this.temp < 18) {
      return 'low-usage';
    }
    else if (this.temp <= 25) {
      return "medium-usage";
    }
    else {
      return "high-usage";
    }
  }
}

module.exports = Thermostat;