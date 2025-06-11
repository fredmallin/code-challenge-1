var numberOfCups
function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200;
  const milkPerCup = 50;
  const teaLeavesPerCup = 1;
  const sugarPerCup = 2;

  return {
    totalWater: waterPerCup * numberOfCups,
    totalMilk: milkPerCup * numberOfCups,
    totalTeaLeaves: teaLeavesPerCup * numberOfCups,
    totalSugar: sugarPerCup * numberOfCups,
    numberOfCups
  };
}

module.exports = calculateChaiIngredients;

