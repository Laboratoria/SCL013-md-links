//module.exports = () => {
  // ...
//};

const fs =require('fs');
const ruta = process.argv[2];
console.log('Esta es la Ruta', ruta, 'ruta')
fs.readdir(ruta, (err, archivos)=>{
    archivos.forEach(archivo => {
        console.log('Archivos\n', archivo);
    });
})
