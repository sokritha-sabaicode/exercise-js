const fs = require('fs')

function writeFile(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, 'utf-8', (error) => {
      if (error) {
        reject('file not found');
      } else {
        resolve("Written is Successful");
      }
    })
  })
}

// writeFile('./write.txt', 'hello')
//   .then(() => {
//     console.log('File is written.');
//   })
//   .catch(error => {
//     console.log(error);
//   })


module.exports = writeFile