var amountToSend
function estimateTransactionFee(amountToSend) {
  const feeRate = 0.015;
  const minFee = 10;
  const maxFee = 70;

  let fee = amountToSend * feeRate;

  if (fee < minFee) {
    fee = minFee;
  } else if (fee > maxFee) {
    fee = maxFee;
  }

  const totalDebited = amountToSend + fee;

  return {
    amountToSend,
    fee,
    totalDebited
  };
}

module.exports = estimateTransactionFee;
