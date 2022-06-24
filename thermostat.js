class Thermostat {
  constructor() {
    this.temp = 20;
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
    if (this.powerSavingMode == true) {
      return 25
    } 
    else {
      return this.temp;
    }
  }
}

module.exports = Thermostat;