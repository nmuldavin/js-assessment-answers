exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return(fn(arr[0], arr[1], arr[2]));
  },

  speak : function(fn, obj) {
    return fn.call(obj, fn);
  },

  functionFunction : function(str) {
    return function(message) {
      return str + ', ' + message;
    }
  },

  makeClosures : function(arr, fn) {
    var out = [];

    var makefunction = function(value) {
      return function() {return fn(value)}
    }

    for (var i = 0; i < arr.length; i++) {
      out.push(makefunction(arr[i]));
    }

    return out;
  },

  partial : function(fn, str1, str2) {
    return function(ex) {
      return fn(str1, str2, ex);
    };
  },

  useArguments : function() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    // making args array so that I can use shift()
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);

    return fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      var args2 = Array.prototype.slice.call(arguments);
      args2 = args.concat(args2);
      return fn.apply(null, args2);
    };
  },

  curryIt : function(fn) {
    function applyArguments(fn, arguments) {
      return fn.apply(null, arguments);
    }

    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

        if (allArgumentsProvided) {
          return applyArguments(fn, accumulatedArguments);
        } else {
          return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
        }
      };
    }

    return getArgumentAccumulator([], fn.length);
  }
};
