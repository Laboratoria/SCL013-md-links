/*const mdLinks = require('../');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});

const axios = require('axios');

const promises = {
  fetchUser:() => axios
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.data)
  .catch(error => 'Ejecutando Error')
}

module.exports = promises;
*/
/*
const promises = require('../src/readMd')
test ('User fetch shold be Leann Graham', ()=>{
  expect.assertions(1);
  const data = await promises.fecthUser();
  expect(data.name).toEqual('Leanne Graham');
  expect(data)
})
*/



const readMD = require('../src/readMd');

test('readMD', () => {
  expect.assertions(1)
  return readMD.then(readMD => {
    expect(readMD(path)).toBe('function');
  });
});