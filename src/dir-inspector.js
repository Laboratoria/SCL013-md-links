const fs = require('fs');
const path = require('path');
const Filehound = require("filehound");
const readDir = (...userPaths) => {
  const paths = [];
  // Usar las rutas recibidas para armar un conjunto de rutas
  // pasarlas a Filehound
  userPaths.forEach(p => {
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
