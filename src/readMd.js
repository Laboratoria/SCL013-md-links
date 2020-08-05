const fs = require('fs');
const readMd = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'UTF-8', (error, file) => {
      if (error) {
        reject(error)
      } else {
        // to do: agregar soporte para sitios que inicien con www
        const regEx = /(?:(http|https|)).\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9].*/gi //g = busqueda Global, i= insensible a mayusculas y minusculas
        const foundLinks = file.match(regEx) || [];
        const linksWithOutParentesis = foundLinks.map((link) => {
          return link.replace(/[)]$/gi, '')
        })
        resolve(linksWithOutParentesis);
      };
    });
  });
}
module.exports = {
  readMd: readMd
}
