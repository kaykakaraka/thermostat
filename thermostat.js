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

  getTemperature() {
    return this.temp;
  }
}

module.exports = Thermostat;