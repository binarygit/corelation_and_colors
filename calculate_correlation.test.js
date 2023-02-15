const calc = require('./calculate_correlation');

// This is a private method. Tests are here only because they help. Delete later.
describe('correct deviation squared is obtained', () => {
test('returns correct deviation squared for integers', () => {
  data = [50, 60, 70, 80, 73, 83, 83, 55]
  expect(calc.getDeviationSquaredOf(data)).toBe(1167.5)
})

test('returns correct deviation squared for floats', () => {
  data = [5.0, 6.0, 6.0, 6.5, 5.6, 5.7, 6.6, 5.0]
  expect(calc.getDeviationSquaredOf(data)).toBe(2.54)
})

test('returns correct deviation squared for floats and integers', () => {
  data = [5.0, 6, 6, 6.5, 5.6, 5.7, 6.6, 5.0]
  expect(calc.getDeviationSquaredOf(data)).toBe(2.54)
})
})

// This is a private method. Tests are here only because they help. Delete later.
describe('correct product of deviation scores is obtained', () => {
  test('returns the correct product of deviation scores', () => {
    dataOne = [50, 60, 70, 80, 73, 83, 83, 55] 
    dataTwo = [5.0, 6, 6, 6.5, 5.6, 5.7, 6.6, 5.0] 

    dataOneDeviationScores = calc.getDeviationScoresOf(dataOne)
    dataTwoDeviationScores = calc.getDeviationScoresOf(dataTwo)

    expect(calc.summationOfProductsOfDeviationScores(dataOneDeviationScores, dataTwoDeviationScores)).toBe(41.50)
  })
})

describe('correct R value is obtained', () => {
  test('returns 1 when data is same', () => {
    // Q1 - Q1
    data = [[4.0, 4.0], [4.0, 4.0], [4.0, 4.0], [5.0, 5.0], [5.0, 5.0], [4.0, 4.0], [3.0, 3.0], [4.0, 4.0], [3.0, 3.0], [5.0, 5.0]]

    expect(calc.calculateR(data)).toBe(1)
  }) 

  test('returns -1 when data is completely opposite', () => {
    // Q1 - Q4
    data = [[4.0, -4.0], [4.0, -4.0], [4.0, -4.0], [5.0, -5.0], [5.0, -5.0], [4.0, -4.0], [3.0, -3.0], [4.0, -4.0], [3.0, -3.0], [5.0, -5.0]]

    expect(calc.calculateR(data)).toBe(-1)
  })

  test('returns the correct R value', () => {
    data = [[50, 5.0], [60, 6], [70, 6], [80, 6.5], [73, 5.6], [83, 5.7], [83, 6.6], [55, 5.0]]

    expect(calc.calculateR(data)).toBe(0.76)
  }) 

  // the data provided here are from the excel sheet given in the original issue
  test('returns the correct R value', () => {
    // Q1 - Q2
    data = [[4.0, 3], [4.0, 4.0], [4.0, 4.0], [5.0, 4], [5.0, 4.0], [4.0, 3.0], [3.0, 3.0], [4.0, 4.0], [3.0, 1.0], [5.0, 5.0]]

    expect(calc.calculateR(data)).toBe(0.77)
  })

  test('returns the correct R value', () => {
    // Q3 - Q4
    data = [[4.0, 4.0], [4.0, 4.0], [4.0, 4.0], [4.0, 5.0], [5.0, 5.0], [4.0, 3.0], [5.0, 5.0], [3.0, 5.0], [1.0, 2.0], [5.0, 5.0]]

    // the R value provided in the excel sheet is wrong
    expect(calc.calculateR(data)).toBe(0.74)
  })

  test('returns the correct R value', () => {
    // Q1 - Q4
  data = [[4.0, 4.0], [4.0, 4.0], [4.0, 4.0], [5.0, 5.0], [5.0, 5.0], [4.0, 3.0], [3.0, 5.0], [4.0, 5.0], [3.0, 2.0], [5.0, 5.0]]

    expect(calc.calculateR(data)).toBe(0.55)
  })
})
