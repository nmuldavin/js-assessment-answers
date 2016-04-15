exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    
    var num = start, t;

    var inc = function() {
        console.log(num++);
        if (num <= end) {
            t = setTimeout(function() {inc();}, 100);
        }
    };

    inc();

    return {
        cancel: function() {
            clearTimeout(t);
        }
    }
  }
};
