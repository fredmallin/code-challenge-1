const calculateBodaFare = require('./fareCalculator');

const distanceInKm = 12; // Example
const { baseFare, travelCharge, totalFare } = calculateBodaFare(distanceInKm);

console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
console.log(`Mpaka Uko: KES ${travelCharge}`);
console.log(`Total: KES ${totalFare}`);
console.log(`\nPanda Pikipiki!`);
