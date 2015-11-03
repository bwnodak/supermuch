var NUMBER_MAP = '0123456789abcdefghijklmnopqrstuvwxyz';

/**
 * Add two string representations of integers
 *
 * @param {string} n1
 * @param {string} n2
 * @param {number} radix (1 to 36)
 */
function add(n1, n2, radix) {
  var carry = 0;
  var result = [];

  radix = radix || 10;
  n1 = toBase10IntArray(n1 || '', radix);
  n2 = toBase10IntArray(n2 || '', radix);

  // Start with the LSD
  n1 = n1.reverse();
  n2 = n2.reverse();

  // Perform addition
  for(var i=0; i < Math.max(n1.length, n2.length); i++) {
    result[i] = (carry || 0) + (n1[i] || 0) + (n2[i] || 0);

    if (result[i] >= radix) {
      carry = Math.floor(result[i] / radix);
      result[i] %= radix;
    } else {
      carry = 0;
    }

    result[i] = NUMBER_MAP[result[i]];
  }

  // Add the remainder to the end
  if (carry) {
    result = result.concat(carry.toString().split('').reverse());
  }

  return result.reverse().join('');
}

/**
 * Convert string to array of base10 integers
 *
 * @param {string} str
 * @param {number} radix
 * @return {array}
 */
function toBase10IntArray(str, radix) {
  var arr = [];

  for (var i=0; i<str.length; i++) {
    arr[i] = parseInt(str[i], radix);
  }
  return arr;
}

// Export public methods
module.exports = { add: add };
