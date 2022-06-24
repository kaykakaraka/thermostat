const { isContext } = require('vm');
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

  it('lowers the temperature by 2 by using the down method twice',() => {
    const thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(18);
  })

  it('can raise and then lower the temperature',() => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();  
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(21);
  })

  it('limits temperature at 25 when power saving mode is on',() => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true); 
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  })

  it('still shows the true temperature when the max temp is not reached',() => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true); 
    expect(thermostat.getTemperature()).toEqual(20);
  })

  it('has power saving mode on by default',() => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('turns off power savng mode',() => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(30);
  })
})
