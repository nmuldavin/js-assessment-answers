exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals() {
    return {
      name: 'Jory',
    };
  },

  functions(flag) {
    if (flag) {
      return (function getValueA() {
        return 'a';
      }());
    }

    return (function getValueB() {
      return 'b';
    }());
  },

  parseInt(num) {
    return parseInt(num, 10);
  },

  identity(val1, val2) {
    return val1 === val2;
  },
};
