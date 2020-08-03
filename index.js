const fs = require ("fs"); // File system
const path = require ("path"); // Maneja url y archivos
const chalk = require ('chalk'); // Chalk dará estilos de colores a los mensajes de la terminal
// const marked = require("marked");
// const getLinks = require('./links.js');
// const regExr = require ("regExr");
// const giveMeAJoke = require('give-me-a-joke');

let file = process.argv[2]; // Archivo, posicion 2

file = path.resolve(file); // Llamamos a let file  y a la ruta path se le asigna una función que pasa la ruta de relativa absoluta
file = path.normalize(file); // Limpia elementos que esten demas al mostrarse en la ruta
// console.log(chalk.blue('Hola coder, esta es la ruta!'));

// Creamos const  para obtener el archivo, con una promesa
// Luego llamamos a fs con la funcion readfile y asignamos como parametro lo que queremos obtener, mas un callback
// Si todo sale bien, mostrará los archivos, si no tirara el error
const showFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        return reject(err)
      } else {
        resolve(data)
        console.log(chalk.blue('Hola coder, esta es la ruta!'));
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
      console.log(chalk.green('File:',file));
    })

    .catch((error) => {
     return reject (error)
      // console.error(error)
    })
  } else {
      // console.log(chalk.red('Error, este No es un archivo .md'))
    }
  });
});


// Lee readme
// let readMd = process.argv[3]; // Archivo, posicion 3

// Lee desde posición absoluta
// readMd = path.resolve(file); // Llamamos a let file  y a la ruta path se le asigna una función que pasa la ruta de relativa absoluta
// readMd = path.normalize(file);

// fs.readFile("README.md", "utf-8", (err,file) => {
//   if (err){
//     throw(error);
//   }
//     console.log('Archivo:',file);
//   })
