//module.exports = () => {
  // ...
//};

const fs = require('fs');
const ruta = process.argv[2];
console.log('Esta es la Ruta', ruta, 'ruta')
// const readMd = process.argv[2];

fs.readdir(ruta, (err, archivos) => {
    archivos.forEach(archivos => {
      if (archivos.includes('.md')) {
        console.log('Archivos\n', archivos);
      }
    })
})
