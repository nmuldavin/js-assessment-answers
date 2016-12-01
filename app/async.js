exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async(value) {
    return new Promise(resolve => {
      resolve(value);
    });
  },

  /**
   * promisified xhr with data manipulation
   */
  manipulateRemoteData(url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = function xhrOnload() {
        if (this.status >= 200 && this.status < 400) {
          resolve(
            JSON.parse(request.responseText)
              .people
              .map(entry => entry.name)
              .sort()
          );
        } else {
          reject({ status: this.status });
        }
      };

      request.onerror = function xhrOnerror() {
        reject({ status: this.status });
      };

      request.send();
    });
  },
};
