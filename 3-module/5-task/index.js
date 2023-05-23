function getMinMax(str) {
  const numbers = str.split(' ').filter(elem => Number(elem)).map(elem => Number(elem));

  let result = {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    }
  return result;
}
