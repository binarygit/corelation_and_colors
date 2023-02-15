// To learn more about Pearson's R: https://www.socscistatistics.com/tests/pearson/default2.aspx
//
// Takes an array
// containing sets of a recipient's questions and answers
// [(recipient1.question1.answer, recipient1.question2.answer),
// (recipient2.question1.answer, recipient2.question2.answer)...]
function calculateR(values) {
  xValues = values.map(valueSet => valueSet[0])
  yValues = values.map(valueSet => valueSet[1])

  result = summationOfProductsOfDeviationScores(getDeviationScoresOf(xValues), 
                                                getDeviationScoresOf(yValues)) 
           / 
           Math.sqrt(getDeviationSquaredOf(xValues) * 
                     getDeviationSquaredOf(yValues))
  return roundToSecondDecimalPlace(result)
}

// private

function summationOfProductsOfDeviationScores(xDeviationScores, yDeviationScores) {
  let result = 0
  for (let i = 0; i < xDeviationScores.length; i++) {
    result += xDeviationScores[i] * yDeviationScores[i]
  }
  return roundToSecondDecimalPlace(result);
}

function roundToSecondDecimalPlace(number) {
  return Number((number).toFixed(2))
}

function getDeviationSquaredOf(values) {
  let deviationSquared = getDeviationScoresOf(values).reduce(function(sum, score) {
    square = score * score
    return sum + square
  }, 0)

  return roundToSecondDecimalPlace(deviationSquared)
}

function getDeviationScoresOf(values) {
  deviationScores = values.map(value => value - getMeanOf(values))
  return deviationScores
}

function getMeanOf(values) {
  let sumOfValues = values.reduce((sum, value) => sum + value)
  let mean = sumOfValues / values.length
  return mean
}

module.exports = {
  getDeviationSquaredOf,
  getDeviationScoresOf,
  summationOfProductsOfDeviationScores,
  calculateR
};
