const fs = require ("fs"); // File system
const path = require ("path"); // Maneja url y archivos
const chalk = require ('chalk'); // Chalk dará estilos de colores a los mensajes de la terminal
// const marked = require("marked");
// const regExr = require ("regExr");

let file = process.argv[2]; // Archivo, posicion 2
file = path.resolve(file); // Llamamos a let file  y a la ruta path se le asigna una función que pasa la ruta de relativa absoluta
file = path.normalize(file); // Limpia elementos que esten demas al mostrarse en la ruta
console.log(chalk.blue('Hola coder, esta es la ruta!'), file);

// Creamos const  para obtener el archivo, con una promesa
// Luego llamamos a fs con la funcion readfile y asignamos como parametro lo que queremos obtener, mas un callback
// Si todo sale bien, mostrará los archivos, si no tirara el error
const showFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, file) => {
      if (err) {
        reject(err)
        console.log('ERROR', reject);
      } else {
        resolve(file)
        // console.log(chalk.blue('Hola md!'));
      }
        console.log(reject);
      })
  })
}

// Creamos la condicional si el archivo es tipo .md, traemos ese archivo, si no, nos devuelve error
// Asignamos mensaje de error en else

fs.readdir(file,'utf-8', (err, file) => {
  file.forEach(file => {
    if (file.includes('.md')) {
      showFile(file)
      .then((fileData) => {
      // console.log(chalk.green('File md:',file));
    })
    .catch((error) => {
     return reject (error)
    //  console.log(chalk.red('No es un archivo .md'))
    })
  } else {
      // console.log(chalk.red('No es un archivo .md'))
    }
  });
});

const { readDir } = require('./src/dir-inspector');
const { readMd } = require('./src/readMd');
let { verifyUrl } = require('./src/verifyUrl');

// Muestra links
const rd = readDir('./'); // Poner direccion especifica
rd
  .then((filesPaths) => {
    const promises = []; // Creamos promesa dentro de un array

    filesPaths.forEach((filePath) => {
      promises.push(new Promise((resolve, reject) => {
        const mdFile = readMd(filePath);
        mdFile
          .then((links) => {
            verifyUrl(links)
              .then((linksResults) => {
                resolve(linksResults);
              })
              .catch((err) => {
                reject(err);
              });
          })
          .catch((error) => {
            reject(error);
          });
      })); // End push
    }); // End forEach
    Promise.all(promises)
      .then((allLinksResults) => {
        let concatenatedResults = [];
        allLinksResults.forEach((result) => {
          concatenatedResults = concatenatedResults.concat(result)
        });
        console.log("Array concatenados", concatenatedResults);
        const validLinks = concatenatedResults.filter((linkItem) => {
          if (linkItem.exists === true) {
            return true;
          } else {
            return false;
          }
        });
        const stats = {
          analizedLinks: concatenatedResults.length,
          validLinks: validLinks.length
        };
        console.log("Soy stats", stats);
      });
  })
  .catch((error) => {
    console.log(error);
  });
