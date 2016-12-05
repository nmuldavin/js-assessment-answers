exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString(str, amount) {
    // iterating with reduce
    let { accum } = Array.prototype.reduce.call(str, ({ count, prevChar, accum }, char) => {
      let next = {
        prevChar: char,
      };
      // record count of consecutive matchin characters
      next.count = char === prevChar ? count + 1 : 1;
      // add character to string if count is below threshold
      next.accum = next.count <= amount ? accum.concat(char) : accum;

      return next;
    }, { count: 0, prevChar: null, accum: '' });

    return accum;
  },

  wordWrap(str, cols) {
    let words = str.split(' ');

    let { accum } = words.reduce(({ lineLength, accum }, word) => {
      let newAccum = accum;
      if (lineLength + word.length <= cols) {
        if (lineLength !== 0) {
          newAccum = newAccum.concat(' ');
        }
        return {
          lineLength: lineLength + word.length,
          accum: newAccum.concat(word),
        };
      }

      if (lineLength !== 0) {
        newAccum = newAccum.concat('\n');
      }

      return {
        lineLength: word.length,
        accum: newAccum.concat(word),
      };
    }, { lineLength: 0, accum: '' });

    return accum;
    // var words = str.split(" ");
    // var out = "";
    // var linelength = 0;
    // for (var i = 0; i < words.length; i++) {
    //     if (linelength + words[i].length <= cols) {
    //         if (linelength !== 0) {
    //             out += " ";
    //         }
    //         out += words[i];
    //         linelength += words[i].length;
    //     } else {
    //         if (linelength !== 0) {
    //             out += "\n";
    //         }
    //         out += words[i];
    //         linelength = words[i].length;
    //     }
    // }
    // return out;
  },

  reverseString(str) {
    return str.split('').reverse().join('');
  },
};
