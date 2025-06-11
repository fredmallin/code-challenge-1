const chai = require('chai');
const expect = chai.expect;
const estimateTransactionFee = require('../estimateTransactionFee');

describe('estimateTransactionFee', () => {
  it('should apply minimum fee for small amounts', () => {
    const result = estimateTransactionFee(500);
    expect(result).to.deep.equal({
      amountToSend: 500,
      fee: 10,
      totalDebited: 510
    });
  });

  it('should calculate normal fee within bounds', () => {
    const result = estimateTransactionFee(2000);
    expect(result).to.deep.equal({
      amountToSend: 2000,
      fee: 30,
      totalDebited: 2030
    });
  });

  it('should apply maximum fee for large amounts', () => {
    const result = estimateTransactionFee(10000);
    expect(result).to.deep.equal({
      amountToSend: 10000,
      fee: 70,
      totalDebited: 10070
    });
  });
});
