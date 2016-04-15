exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    return (function() {
        var public = {};
        public.greeting = str1;
        public.name = str2;
        public.sayIt = function() {
            return this.greeting + ', ' + this.name;
        }

        return public;
    })();
  }
};
