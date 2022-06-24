const Thermostat = require('./thermostat');

describe(Thermostat,() => {
  it('has an initial temperature of 20',() => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });
});
