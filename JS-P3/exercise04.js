const fs = require("fs")

console.log('==== Start ====');

function writeFile(filepath, content, callback) {
  fs.writeFile(filepath, content, (err) => {
    if (err) {
      console.log(err);
    }  
    callback('Writing is successful')
  })
}

// writeFile('write.txt', 'Hello Here', (data) => {
//   console.log(data)
// })

console.log('==== End ====');

module.exports = writeFile