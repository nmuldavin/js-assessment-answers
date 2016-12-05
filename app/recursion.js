exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles(data, dirName) {
    const shouldList = !dirName || data.dir === dirName;
    let filesList = [];
    data.files.forEach(entry => {
      // if entry is a file
      if (!entry.dir) {
        // add it to list if we're in the right directory, or if we don't care
        if (shouldList) {
          filesList.push(entry);
        }
      // else it's a directory, so recurse
      } else {
        filesList = filesList.concat(this.listFiles(entry, shouldList ? null : dirName));
      }
    });

    return filesList;
  },

  permute(arr) {
    return arr.reduce((accum, val, index, array) => {
      // copy whole array
      const rest = array.slice();
      // remove current element
      rest.splice(index, 1);
      // if there are more elements remaining
      if (rest.length) {
        // add to accumulated permutations
        return accum.concat(
          // the current element added to the front of each permutation of the remaining array
          this.permute(rest)
            .map(restPermuted => [val].concat(restPermuted))
        );
      }
      // if no elements remain return value as 2d array
      return [[val]];
    }, []);
  },

  // memoized fibonacci for fun
  fibonacci: (function fiboWrap() {
    const memo = [0, 1];

    return function memoFibonacci(n) {
      if (!memo[n] && memo[n] !== 0) {
        memo[n] = memoFibonacci(n - 1) + memoFibonacci(n - 2);
      }
      return memo[n];
    };
  }()),
};
