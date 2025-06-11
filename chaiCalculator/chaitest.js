const chai = require('chai');
const expect = chai.expect;
const calculateChaiIngredients = require('../chaiLogic');

describe('calculateChaiIngredients', () => {
  it('should calculate correct ingredients for 3 cups', () => {
    const result = calculateChaiIngredients(3);
    expect(result).to.deep.equal({
      totalWater: 600,
      totalMilk: 150,
      totalTeaLeaves: 3,
      totalSugar: 6,
      numberOfCups: 3
    });
  });
});
