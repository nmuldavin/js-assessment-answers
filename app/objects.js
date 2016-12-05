 exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext(fn, obj) {
    return fn.call(obj);
  },

  alterObjects(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate(obj) {
    return Object.keys(obj).map(key => `${key}: ${obj[key]}`);
  },
};
