//module.exports = () => {
  // ...
//};

const fs = require('fs');
const ruta = process.argv[2];
// console.log('Esta es la Ruta', ruta, 'ruta')
// const readMd = process.argv[2];

// console.log('1', process.argv[1])
// console.log('0', process.argv[0])
// console.log(process[(process.argv[2])])
// console.log(ruta)

fs.readdir(ruta, (err, archivos) => {
    archivos.forEach(archivos => {
      if (archivos.includes('.md')) {
        console.log(archivos);
      }
    })
})


// const readMd = process.argv[2];
// fs.readdir(ruta, (err, archivos) => {
//     archivos.forEach(archivo => {
//       if (archivo.includes('.http')) {
//         console.log(archivo);
//       }
//     })
// })





// fs.readdir(ruta, (err, archivos) => {
//   archivos.forEach(archivo => {
//     if (archivo.includes('.md')) {
//       console.log(archivo);
//     }
//   })
// })

// fs.readdir(ruta, (err, archivos) => {
