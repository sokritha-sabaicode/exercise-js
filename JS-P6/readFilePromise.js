const fs = require('fs')

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject('file not found');
      } else {
        resolve(data);
      }
    })
  })
}

// readFile('./read.txt')
//   .then(data => {
//     console.log('Data is', data);
//   })
//   .catch(error => {
//     console.log(error);
//   })



module.exports = readFile