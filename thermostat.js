class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSavingMode = true;
  }

  up() {
    if (this.powerSavingMode == true && this.temp < 25) { 
      this.temp += 1;
    }
    else if (this.powerSavingMode == false) {
      this.temp += 1;
    };
  }

  down() {
    this.temp -= 1
  }

  setPowerSavingMode(command) {
    if (command === false) {
      this.powerSavingMode = false }
    else if (command === true) {
      this.powerSavingMode = true
    }
  }

  getTemperature() {
      return this.temp;
  }
}

module.exports = Thermostat;