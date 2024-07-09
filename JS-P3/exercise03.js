const fs = require("fs")

function readFile(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("Error read:\n", err);
    }
    callback(data); 
  })
}

// readFile("input.txt", (data) => {
//   const result = data;
//   const newWord = result + " Good Bye"
//   console.log(newWord)
// });

module.exports = readFile;