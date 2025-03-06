/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  let totalCost = 0;

  for (let i = 0; i < +days; i++) {
    totalCost += costPerDay;
  }

  if (days >= 7) {
    return totalCost - 50;
  }

  if (days >= 3) {
    return totalCost - 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
