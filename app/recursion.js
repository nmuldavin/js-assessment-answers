exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
      var out = [];
      var list = !dirName || data.dir === dirName;
      for (var i = 0; i < data.files.length; i++) {
        if (typeof data.files[i] === 'string') {
          if (list) {
            out.push(data.files[i]);
          }
        } else if (!list) {
          out = out.concat(this.listFiles(data.files[i], dirName));
        } else {
          out = out.concat(this.listFiles(data.files[i]));
        }
      }
      return out;
    },

  permute: function(arr) {
    var out = [];
    
    var innerPermute = function(array, build) {
      var current;

      for (var i = 0; i < array.length; i++) {
        // remove one element and save it array form to 'current'
        current = array.splice(i, 1);
        // if the array no longer contains elements
        if (array.length === 0) {
          // add the current to the build array
          out.push(build.concat(current));
        } else {
          // add current to build array, then permute a copy of remaining array
          innerPermute(array.slice(), build.concat(current));
        }
        // add item back in to array
        array.splice(i, 0, current[0]);
      }
      return out;
    }

    return innerPermute(arr, []);

  },

  fibonacci: function() {
    var memo = [0, 1];
    var fib = function(n) {
      var result = memo[n];
      if (typeof result !== 'number') {
        result = fib(n - 1) + fib(n - 2);
        memo[n] = result;
      }
      return result;
    }
    return fib;
  }()
};
