exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter(str) {
    return /([a-zA-Z])\1/.test(str);
  },

  endsWithVowel(str) {
    return /[aeiou]$/i.test(str);
  },

  captureThreeNumbers(str) {
    let result = /\d{3}/.exec(str);
    return result ? result[0] : false;
  },

  matchesPattern(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
  },

  isUSD(str) {
    return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);
  },
};
