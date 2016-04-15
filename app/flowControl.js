exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // check that num exists and is a number
    if (typeof(num) !== 'number') {
        return false;
    }

    // builds response based on conditions
    var response = '';
    if (num % 3 === 0) {
        response += 'fizz';
    }
    if (num % 5 === 0) {
        response += 'buzz';
    }
    
    // returns response or number if no response
    return response ? response : num;
  }
};
