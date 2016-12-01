exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf(arr, item) {
    return arr.indexOf(item);
  },

  sum(arr) {
    return arr.reduce((sum, curr) => sum + curr, 0);
  },

  remove(arr, item) {
    return arr.filter(entry => entry !== item);
  },

  removeWithoutCopy(arr, item) {
    let i = 0;
    while (arr[i]) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  },

  append(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate(arr) {
    arr.pop();
    return arr;
  },

  prepend(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail(arr) {
    arr.shift();
    return arr;
  },

  concat(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count(arr, item) {
    return arr.reduce((count, curr) => {
      if (curr === item) {
        return count + 1;
      }
      return count;
    }, 0);
  },

  /**
   * What is done here depends on how general elements of array are. The test only uses
   * numbers so this is safe, otherwise you would need some kind of hashing
   */
  duplicates(arr) {
    // map kept for quick access
    let dups = {};
    // array will be returned at end
    let dupsArr = [];
    let uniques = {};

    /**
     * For each item - add to uniques map if not there already
     * if not already in duplicates map, push to duplicates array
     */
    arr.forEach(item => {
      if (!uniques[item]) {
        uniques[item] = true;
      } else if (!dups[item]) {
        dups[item] = true;
        dupsArr.push(item);
      }
    });

    return dupsArr;
  },

  square(arr) {
    return arr.map(x => x * x);
  },

  findAllOccurrences(arr, target) {
    /**
     * Recursive Inner function to accumulate list of indices
     * Repeatedly applies array.indexOf(value, startIndex)
     * @param  {Array}  array       Array to search
     * @param  {*}      value       Value to search for
     * @param  {Number} startIndex  Index to start searching at
     * @param  {Array}  entries     Accumulated array of indices
     * @return {Array}              Accumuldated array of indices
     */
    function findIndexRecursive(array, value, startIndex, entries) {
      // find index
      let index = array.indexOf(value, startIndex);
      // if found
      if (index !== -1) {
        // accumulate
        entries.push(index);
        // recurse
        return findIndexRecursive(array, value, index + 1, entries);
      }
      // if not found, return accumulation
      return entries;
    }

    /**
     * Applying inner function starting at 0
     */
    return findIndexRecursive(arr, target, 0, []);
  },
};
