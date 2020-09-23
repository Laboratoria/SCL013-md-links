const { readDir } = require('./src/dir-inspector');
const { readMd } = require('./src/readMd');
const { verifyUrl } = require('./src/verifyUrl');
const chalk = require('chalk');
const path = require ('path');
const { log } = require('console');
const userInput = process.argv[2];
const userPath = path.isAbsolute(userInput) ?
  userInput
  : (path.join ( __dirname, userInput))
const rd = readDir(userPath);
rd
  .then((filesPaths) => {
    console.log(chalk.magenta('Buscando archivos... por favor espere!\n'));
    const promises = [];
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
        console.log(chalk.greenBright("Array concatenados de links Analizados\n"))
        console.log(concatenatedResults);
        const validLinks = concatenatedResults.filter((linkItem) => {
          if (linkItem.exists === true) {
            return true;
          } else {
            return false;
          }
        });
        const stats = {
          analizedLinks: concatenatedResults.length,
          validLinks: validLinks.length,
          inValidLinks : concatenatedResults.length - validLinks.length
        };
        console.log(chalk.cyan('Resumen de link Analizados:'));
        console.table(stats);
      });
  })
  .catch((error) => {
    console.error(chalk.red('Ocurrio un error, al buscar Directorio especificado\n',error.message));
  });
