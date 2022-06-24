class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSavingMode = true;
  }

  up() {
    this.temp += 1;
  }

  down() {
    this.temp -= 1
  }

  setPowerSavingMode(command) {
    this.powerSavingMode = true
  }

  getTemperature() {
    if (this.powerSavingMode == true && this.temp > 25) {
      return 25
    } 
    else {
      return this.temp;
    }
  }
}

module.exports = Thermostat;