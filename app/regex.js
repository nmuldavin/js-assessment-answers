exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var regExp = /\d/;
    return regExp.test(str);
  },

  containsRepeatingLetter : function(str) {
    var regExp = /([a-zA-Z])\1/
    return regExp.test(str);
  },

  endsWithVowel : function(str) {
    var regExp = /[aeiou]$/i
    return regExp.test(str);
  },

  captureThreeNumbers : function(str) {
    var regExp = /\d{3}/
    var result = regExp.exec(str);
    return result ? result[0] : false
  },

  matchesPattern : function(str) {
    var regExp = /^\d{3}-\d{3}-\d{4}$/
    return regExp.test(str);
  },
  isUSD : function(str) {
    var regExp = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/
    return regExp.test(str);
  }
};
