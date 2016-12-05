exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray(fn, arr) {
    return fn(...arr);
  },

  speak(fn, obj) {
    return fn.call(obj, fn);
  },

  functionFunction(str) {
    return message => `${str}, ${message}`;
  },

  makeClosures(arr, fn) {
    return arr.map(val => () => fn(val));
  },

  partial(fn, str1, str2) {
    return ex => fn(str1, str2, ex);
  },

  useArguments(...args) {
    return args.reduce((sum, curr) => sum + curr, 0);
  },

  callIt(fn, ...args) {
    return fn(...args);
  },

  partialUsingArguments(fn, ...args) {
    return (...moreArgs) => fn(...args, ...moreArgs);
  },

  curryIt(fn) {
    /**
     * accumulate - Inner function to accumulate args or return
     * Adds current arg to array. If array length equals number
     * of expected arguments, evaluates provided function with those arguments, otherwise
     * returns a function that calls itself
     * @param  {Array}    args Accumulating array of arguments
     * @param  {*}        arg  current argument
     * @param  {Function} func Function to apply
     * @return {Function|*}    function or evaluated function
     */
    function accumulate(args, arg, func) {
      args.push(arg);
      if (args.length === func.length) {
        return func(...args);
      }

      return nextArg => accumulate(args, nextArg, func);
    }

    // return function that calls accumulate to start
    return arg => accumulate([], arg, fn);
  },
};
