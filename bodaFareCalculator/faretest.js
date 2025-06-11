it('should return base fare for 0 km', () => {
  const result = calculateBodaFare(0);
  expect(result).to.deep.equal({
    baseFare: 50,
    travelCharge: 0,
    totalFare: 50,
    distanceInKm: 0
  });
});
