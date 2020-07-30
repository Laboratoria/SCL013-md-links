//module.exports = () => {
  // ...
//};


const fs = require('fs');
const path = require('path');


const ruta = process.argv[2]
fs.readdir(ruta, (err, file) => {
  file.forEach(file => {
    if (file.includes('.md')) {
      // console.log(ruta)
      console.log(file)
    }
  });
});


