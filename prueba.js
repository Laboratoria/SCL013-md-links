const fs = require('fs');

const regEx = /(?:(http|https|)).\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9].*/gi;
fs.readFile("README.md", "utf-8", (error,file) => {
  if (error){
    console.log(error);
  }else{
    const linkFound = file.match(regEx)
    console.log(linkFound);
  }
})

const file = fs.readdir('./',(error, file)=>{
  if (error){
    throw error;
  }
  console.log('me trae la lista de archivos',file)

  fs.readFile('./README.md', 'UTF-8', (error, archivo)=>{
    if (error){
      throw error;
    }
    console.log (archivo);
  })
  console.log('Contenido de Archivo');
});

//Validar que un archivo existe
const archivo = 'README.md'
const valideFile = fs.access( archivo, fs.constants.F_OK, (error) =>{
if(error){
  console.log('El archivo no existe');
}else{
  console.log('El archivo si existe');

}
})
