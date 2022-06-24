class Thermostat {

  up() {
    this.temperature = 'up'
  }

  getTemperature() {
    if (this.temperature == 'up') {
      return 22;
    } else {
    return 20;
    }
  }
}

module.exports = Thermostat;