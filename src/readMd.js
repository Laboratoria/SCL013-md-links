const fs = require('fs');
const chalk = require ('chalk');

// lee el readme
fs.readFile('./README.md', 'UTF-8', (error, archivo)=>{
  if (error){
    throw error;
  }
  console.log (chalk.magenta('Contenido del archivo \n', archivo));
})

// Lee los links
// Lo puse con ruta especifica en vez de 'filePath' en
const readMd = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile('./README.md', 'UTF-8', (error, file) => {
      if (error) {
        reject(error)
      } else {
        // to do: agregar soporte para sitios que inicien con www
        const regEx = /(?:(http|https|)).\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9].*/gi //g = busqueda Global, i= insensible a mayusculas y minusculas
        const found = file.match(regEx);
        resolve(found);
      };
    });
  });
};

module.exports = {
  readMd: readMd
}




