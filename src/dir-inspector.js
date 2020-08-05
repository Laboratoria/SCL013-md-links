const fs = require('fs');
const chalk = require('chalk');
const Filehound = require("filehound");
const { log } = require('console');
const readDir = (...userPaths) => {
  const paths = [];
  // Usar las rutas recibidas para armar un conjunto de rutas
  // pasarlas a Filehound
  userPaths.forEach(p => {
    console.log(chalk.cyan('Ruta de busqueda asignada por el usuario'));
    console.log(p);
    if (typeof(p) === "string") {
      paths.push((p));
    }
  });
  return new Promise((resolve, reject) => {
    Filehound.create()
      .ext("md")
      .paths(paths)
      .find((err, mdFiles) => {
        if (err) {
          reject(err);
        } else {
          resolve(mdFiles);
        }
      });
  });
};
module.exports = { readDir: readDir}
