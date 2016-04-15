exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var i;
    for (i = 0; i < arr.length; i += 1) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum : function(arr) {
    var i, sum = 0;
    for(i = 0; i < arr.length; i += 1) {
      sum += arr[i];
    }

    return sum;
  },

  remove : function(arr, item) {
    var i, out=[];
    for(i = 0; i < arr.length; i += 1) {
      if (arr[i] !== item) {
        out.push(arr[i]);
      }
    }

    return out;
  },

  removeWithoutCopy : function(arr, item) {
    var i;
    for(i = arr.length - 1; i >= 0; i -= 1) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var i, count = 0;
    for(i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count += 1;
      }
    }

    return count;
  },

  duplicates : function(arr) {
    var i, uniquelist = [], duplicates = [];
    for(i = 0; i < arr.length; i++) {

      if (uniquelist.indexOf(arr[i]) === -1) {
        uniquelist.push(arr[i]);
      } else if (duplicates.indexOf(arr[i]) === -1) {
        duplicates.push(arr[i]);
      }
    }

    return duplicates;
  },

  square : function(arr) {
    var sqr = function(value) {
      return value*value;
    }
    return arr.map(sqr);
  },

  findAllOccurrences : function(arr, target) {
    var i, out = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        out.push(i);
      }
    }
    return out;
  }
};
