exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz(num) {
    // check that num exists and is a number
    if (typeof num !== 'number') {
      return false;
    }

    // builds response based on conditions
    let response = '';
    if (num % 3 === 0) {
      response = response.concat('fizz');
    }
    if (num % 5 === 0) {
      response = response.concat('buzz');
    }

    // returns response or number if no response
    return response || num;
  },
};
