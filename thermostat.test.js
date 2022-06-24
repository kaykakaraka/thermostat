const Thermostat = require('./thermostat');

describe(Thermostat,() => {
  it('has an initial temperature of 20',() => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('raises the temperature by 1 by calling the up method',() => {
    const thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  })

  it('raises the temperature by 2 by using the up method twice',() => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();  
    expect(thermostat.getTemperature()).toEqual(22);
  })

  it('lowers the temperature by 1 by using the down method',() => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  })
});
