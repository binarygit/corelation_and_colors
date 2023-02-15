function getColorForR(value) {
  value = roundToOneDecimalPlace(value)
  if (value == 0) return '#FFFFFF'
  if (value < 0) return getColorForNegativeR(value)
  return getColorForPositiveR(value)
}

// private

function getColorForNegativeR(value) {
  value = Math.abs(value)
  // Used this blender to generate the colors: https://meyerweb.com/eric/tools/color-blend/#EF5751:FCB7B7:8:hex
  // Just input the value of colors[1] and colors[0.1] in the above link
  // to view the generated colors
  const colors = {
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

  return colors[value]
}

function getColorForPositiveR(value) {
  value = Math.abs(value)
  const colors = {
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

  return colors[value]
}

function roundToOneDecimalPlace(number) {
  return Number((number).toFixed(1))
}

module.exports = getColorForR;
