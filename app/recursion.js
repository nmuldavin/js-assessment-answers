exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    out = [];
    if (!dirName || data.dir === dirName) {
        for (var i = 0; i < data.files.length; i++) {
            if (typeof data.files[i] === 'string') {
                out.push(data.files[i]);
            } else {
                out = out.concat(this.listFiles(data.files[i], dirName));
            }
        }
    }
    return out;
  },

  permute: function(arr) {
    var out = [];
    for (var i in arr) {

    }
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
