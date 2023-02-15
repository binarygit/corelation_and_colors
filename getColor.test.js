const color = require('./getColor.js');
let negativeRange = [-1, -0.9, -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1]
let negativeColors = {
  1: '#EF5751',
  0.9: '#F0625C',
  0.8: '#F26C68',
  0.7: '#F37773',
  0.6: '#F5827E',
  0.5: '#F68C8A',
  0.4: '#F89795',
  0.3: '#F9A1A1',
  0.2: '#FBACAC',
  0.1: '#FCB7B7',
}
let positiveRange = negativeRange.map(num => Math.abs(num))
let positiveColors = {
  1: '#412678',
  0.9: '#533986',
  0.8: '#654D93',
  0.7: '#7760A1',
  0.6: '#8973AE',
  0.5: '#9B87BC',
  0.4: '#AD9AC9',
  0.3: '#BFADD7',
  0.2: '#D1C1E4',
  0.1: '#E3D4F2'
}


describe('returns correct color when digits rounded to single decimal place are passed', () => {
  test('getColor should return the color white for Rvalue of 0', () => {
    expect(color(0)).toBe('#FFFFFF')
    expect(color(0.0)).toBe('#FFFFFF')
  })

  test('returns correct hex value for negative nos', () => {
    negativeRange.forEach((num) => {
      key = Math.abs(num)
      expect(color(num)).toBe(negativeColors[key])
    })
  })

  test('returns correct hex value for positive nos', () => {
    positiveRange.forEach((num) => {
      key = Math.abs(num)
      expect(color(num)).toBe(positiveColors[key])
    })
  })
})

describe('returns the correct color when digits rounded to second decimal place are passed', () => {
  test('getColor should return the color white for Rvalue of 0', () => {
    expect(color(0.01)).toBe('#FFFFFF')
    expect(color(0.04)).toBe('#FFFFFF')
    expect(color(0.05)).toBe('#E3D4F2')
    //negative 0
    expect(color(-0.01)).toBe('#FFFFFF')
    expect(color(-0.04)).toBe('#FFFFFF')
    expect(color(-0.05)).toBe('#FCB7B7')
    expect(color(-0.05)).toBe('#FCB7B7')
  })

  test('getColor should return correct colors for negative Rvalues', () => {
    expect(color(-0.10)).toBe('#FCB7B7')
    expect(color(-0.14)).toBe('#FCB7B7')
    expect(color(-0.15)).toBe('#FCB7B7')
    // it rounds this off to -0.2,
    // which is why we get a different color
    expect(color(-0.16)).toBe('#FBACAC')
  })

  test('getColor should return correct colors for negative Rvalues', () => {
    expect(color(0.10)).toBe('#E3D4F2')
    expect(color(0.14)).toBe('#E3D4F2')
    expect(color(0.15)).toBe('#E3D4F2')
    // it rounds this off to 0.2,
    // which is why we get a different color
    expect(color(0.16)).toBe('#D1C1E4')
  })
})
