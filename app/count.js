exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
  count(start, end) {
    let current = start;
    let t;

    function inc() {
      console.log(current++);
      if (current <= end) {
        t = setTimeout(inc, 100);
      }
    }

    inc();

    return {
      cancel() {
        clearTimeout(t);
      },
    };
  },
};
