class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSavingMode = true;
  }

  up() {
    if (this.powerSavingMode == true && this.temp < 25) { 
      this.temp += 1;
    };
  }

  down() {
    this.temp -= 1
  }

  setPowerSavingMode(command) {
    this.powerSavingMode = true
  }

  getTemperature() {
      return this.temp;
  }
}

module.exports = Thermostat;