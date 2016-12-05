exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit(num, bit) {
    return 1 & (num >> bit - 1);
  },

  base10(str) {
    return parseInt(str, 2);
  },

  convertToBinary(num) {
    let out = '';
    let i;
    for (i = 8; i > 0; i--) {
      out += this.valueAtBit(num, i);
    }
    return out;
  },

  multiply(a, b) {
    function adjust(num) {
      let exponent;
      let multiplier;

      if (num < 1) {
        exponent = Math.floor(Math.log(num) * -1);
        multiplier = Math.pow(10, exponent);

        return { adjusted: num * multiplier, multiplier };
      }

      return { adjusted: num, multiplier: 1 };
    }

    let aPrime = adjust(a);
    let bPrime = adjust(b);

    return (aPrime.adjusted * bPrime.adjusted) / (aPrime.multiplier * bPrime.multiplier);
  },
};
