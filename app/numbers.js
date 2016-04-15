exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & num >> bit - 1;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var out = "";
    for (i = 7; i >= 0; i--) {
        out += 1 & num >> i;
    }
    return out;
  },

  multiply: function(a, b) {
    var ans = a*b;
  }
};
