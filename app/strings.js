exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var out = '';
    var previousChar;
    var matches = 1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === previousChar) {
            matches += 1
        } else {
            matches = 1
        }
        if (matches <= amount) {
            out += str[i];
        }
        previousChar = str[i];
    }
    return out;
  },
  wordWrap: function(str, cols) {
    var words = str.split(" ");
    var out = "";
    var linelength = 0;
    for (var i = 0; i < words.length; i++) {
        if (linelength + words[i].length<= cols) {
            if (linelength !== 0) {
                out += " ";
            }
            out += words[i];
            linelength += words[i].length;
        } else {
            if (linelength !== 0) {
                out += "\n";
            }
            out += words[i];
            linelength = words[i].length;
        }
    }
    return out;
  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
