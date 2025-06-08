
;// fareCalculator.js
const baseFare = 50;         // KES
const chargePerKm = 15;      // KES per km

function calculateBodaFare(distanceInKm) {
  const travelCharge = distanceInKm * chargePerKm;
  const totalFare = baseFare + travelCharge;

  return {
    baseFare,
    travelCharge,
    totalFare,
    distanceInKm
  };
}

module.exports = calculateBodaFare;
// fareCli.js
const calculateBodaFare = require('./fareCalculator');

const distanceInKm = 12; // Automatically calculate for 12 km
const { baseFare, travelCharge, totalFare } = calculateBodaFare(distanceInKm);

console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
console.log(`Mpaka Uko: KES ${travelCharge}`);
console.log(`Total: KES ${totalFare}`);
console.log(`\nPanda Pikipiki!`);
// test/fareCalculator.test.js
const chai = require('chai');
const expect = chai.expect;
const calculateBodaFare = require('../fareCalculator');

describe('calculateBodaFare', () => {
  it('should calculate correct fare for 12 km', () => {
    const result = calculateBodaFare(12);
    expect(result).to.deep.equal({
      baseFare: 50,
      travelCharge: 180,
      totalFare: 230,
      distanceInKm: 12
    });
  });

  it('should return base fare for 0 km', () => {
    const result = calculateBodaFare(0);
    expect(result).to.deep.equal({
      baseFare: 50,
      travelCharge: 0,
      totalFare: 50,
      distanceInKm: 0
    });
  });
