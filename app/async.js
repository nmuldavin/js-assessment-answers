exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject) {
        resolve(value);
    })
  },

  manipulateRemoteData : function(url) {

    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        var data;

        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            // getting initial data
            data = JSON.parse(request.responseText);
            // picking out the part we want
            data = data.people.map(function(entry) {
                return entry.name;
            });
            // sorting
            data.sort();

            resolve(data);

          } else {
            reject('Shit went wrong');
          }
        };

        request.send();
    })
  }
};
