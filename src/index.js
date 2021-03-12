module.exports = function reverse (n) {
  let result;

  n < 0 ? result = '' + (-1 * n) : result = '' +  n;

  return +(result.split('').reverse().join(''));
}
