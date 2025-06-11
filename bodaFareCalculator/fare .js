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
