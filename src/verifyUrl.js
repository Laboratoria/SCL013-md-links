const urlExists = require('url-exists');
const verifyUrl = (links = []) => {
  return new Promise((resolve, reject) => {
    const promises = [];
    links.forEach((link) => {
      promises.push(new Promise((resolve, reject) => {
        urlExists(link, (error, exists) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              link,
              exists
            });
          }
        });
      }));
    });
    Promise.all(promises)
      .then((linkResult) => {
        resolve(linkResult);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
module.exports = {
  verifyUrl: verifyUrl
}
