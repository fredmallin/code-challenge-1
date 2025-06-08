// estimateTransactionFee.js

const readline = require('readline');

function estimateTransactionFee(amountToSend) {
  const feeRate = 0.015;
  const minFee = 10;
  const maxFee = 70;

  let fee = amountToSend * feeRate;

  // Apply minimum and maximum fee limits
  if (fee < minFee) {
    fee = minFee;
  } else if (fee > maxFee) {
    fee = maxFee;
  }

  const totalDebited = amountToSend + fee;

  console.log(`\nSending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log(`\nSend Money Securely!`);
}

// Set up user input via readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Unatuma Ngapi? (KES):4000 ', (input) => {
  const amountToSend = parseFloat(input);

  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log('Tafadhali ingiza kiasi sahihi (number greater than 0)');
  } else {
    estimateTransactionFee(amountToSend);
  }

  rl.close();
});
