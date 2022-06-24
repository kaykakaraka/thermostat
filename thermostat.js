class Thermostat {
  constructor() {
    this.temp = 20;
  }

  up() {
    this.temp += 1;
  }

  down() {
    this.lowerTemp = 19
  }

  getTemperature() {
    if (this.lowerTemp == 19) {
      return this.lowerTemp;
    } else {
    return this.temp;
    }
  }
}

module.exports = Thermostat;