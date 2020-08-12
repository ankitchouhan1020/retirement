export default function calculateOutput({
  startingAge,
  salary,
  savingRate,
  salaryIncrease,
  retirementAge,
  retirementSpending,
  lifespanAge,
  initialSaving,
  investmentReturnRate,
  houseBuyingAge,
  housePrice,
}) {
  const output = [];

  const totalYears = lifespanAge - startingAge;
  let salarySaved = Math.floor((salary / 100) * savingRate);
  let currentAge = startingAge;
  let accumulatedSaving = initialSaving;
  let isRetirementAffordable = true;

  for (let currentYear = 0; currentYear <= totalYears; currentYear++) {
    if (accumulatedSaving < 0) {
      isRetirementAffordable = false;
    }
    output.push({
      age: currentAge,
      saving: isRetirementAffordable ? accumulatedSaving : 0,
    });

    accumulatedSaving += Math.floor(
      (accumulatedSaving / 100) * investmentReturnRate
    );

    const yearsToRetire = retirementAge - currentAge;
    const isRetired = yearsToRetire > 0 ? false : true;

    if (isRetired) {
      accumulatedSaving -= retirementSpending;
    } else if (currentAge === houseBuyingAge) {
      accumulatedSaving -= housePrice * 1_00_000;
    } else {
      salarySaved += Math.floor((salarySaved / 100) * salaryIncrease);
      accumulatedSaving += salarySaved;
    }
    currentAge++;
  }
  return output;
}
