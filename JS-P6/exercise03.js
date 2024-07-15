const readFile = require("./readFilePromise");
const writeFile = require("./writeFilePromise");

readFile("read.txt")
  .then((data) => {
    console.log(data)
    const newData = data + "Friends"
    return writeFile('./write.txt', newData)
  })
  .then((data1) => {
    console.log(data1)
    return readFile("./write.txt")
  })
  .then((data2 => {
    console.log(data2)
    const newData = data2 + "How are you?"
    return writeFile('./write2.txt', newData)
  }))
  .catch(err => {
    console.log(err)
  })