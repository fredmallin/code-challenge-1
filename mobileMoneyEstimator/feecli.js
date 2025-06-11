const readline = require('readline');
const estimateTransactionFee = require('./estimateTransactionFee');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Unatuma Ngapi? (KES): ', (input) => {
  const amountToSend = parseFloat(input);

  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log('Tafadhali ingiza kiasi sahihi (number greater than 0)');
  } else {
    const { amountToSend, fee, totalDebited } = estimateTransactionFee(amountToSend);

    console.log(`\nSending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log(`\nSend Money Securely!`);
  }

  rl.close();
});
