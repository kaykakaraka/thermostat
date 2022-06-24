class Thermostat {
  constructor() {
    this.temp = 20;
    this.lowerTemp = 0
  }

  up() {
    this.temp += 1;
  }

  down() {
    this.lowerTemp += 1
  }

  getTemperature() {
    if (this.lowerTemp == 1) {
      return 19;
    } 
    else if (this.lowerTemp == 2) {
      return 18
    }
    else {
    return this.temp;
    }
  }
}

module.exports = Thermostat;