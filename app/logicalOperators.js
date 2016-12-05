exports = (typeof window === 'undefined') ? global : window;

exports.logicalOperatorsAnswers = {
  or(a, b) {
    return a || b;
  },

  and(a, b) {
    return a && b;
  },
};
